import * as jose from "jose";
import { cache } from "react";
import { compare, hash } from "bcrypt";
import { cookies } from "next/headers";
import { prisma } from "./prisma";
import { createNewUser, getUserByEmail } from "./dal";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env");
}

interface JWTPayload {
  userId: string;
  [key: string]: string | number | boolean | null | undefined;
}

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function hashPassword(password: string) {
  return hash(password, 10);
}

export async function comparePassword(
  password: string,
  hashedPassword: string,
) {
  return compare(password, hashedPassword);
}

export function validateEmail(email: string, emailConfirm: string) {
  if (email !== emailConfirm) {
    return true;
  }
  return false;
}

export async function verifyJWT(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jose.jwtVerify(token, JWT_SECRET);
    return payload as JWTPayload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}

export const getSession = cache(async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) return null;
    const payload = await verifyJWT(token);

    return payload ? { userId: payload.userId } : null;
  } catch (error) {
    // Handle the specific prerendering error
    if (
      error instanceof Error &&
      error.message.includes("During prerendering, `cookies()` rejects")
    ) {
      console.log(
        "Cookies not available during prerendering, returning null session",
      );
      return null;
    }

    console.error("Error getting session:", error);
    return null;
  }
});

async function createJWT(userId: number): Promise<string> {
  return await new jose.SignJWT({ userId: String(userId) })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
}

export async function login(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) {
    return {
      success: false,
      message: "Account was not found, pls try again",
      error: "USER_NOT_FOUND",
    };
  }

  const isValid = await comparePassword(password, user.password);
  if (!isValid) {
    return {
      success: false,
      message: "Wrong email or password, please try again",
      error: "IINVALID_EMAIL_OR_PASSWORD",
    };
  }

  const token = await createJWT(user.id);
  const cookieStore = await cookies();
  cookieStore.set("auth_token", token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return {
    success: true,
    message: "Succesfully login",
    user: {
      id: user.id,
      email: user.email,
      name: user.name ?? null,
      roleId: user.roleId,
    },
  };
}

export async function registration(email: string, password: string) {
  const testUser = getUserByEmail(email);

  if (!testUser) {
    return {
      success: false,
      message: "Account exists, try signin again",
      error: "ACCOUNT_EXISTS",
    };
  }

  const hashedPassword = await hashPassword(password);

  const user = createNewUser(email, hashedPassword);

  return {
    success: true,
    message: "Succesfully login",
  };
}
