"use server";

import { z } from "zod";
import { login, registration, validateEmail } from "../lib/auth";
import { redirect } from "next/navigation";

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  error?: string;
};

export async function signIn(formData: FormData): Promise<ActionResponse> {
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationResult = SignInSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const result = await login(data.email, data.password);

  if (!result.success) {
    return {
      success: false,
      message: result.message,
      error: result.error,
    };
  }

  redirect("/dashboard");
  return {
    success: true,
    message: "Signed in successfully",
  };
}

export async function signUp(formData: FormData): Promise<ActionResponse> {
  const data = {
    email: formData.get("email") as string,
    emainConfirm: formData.get("email-confirm") as string,
    password: formData.get("password") as string,
  };

  const validationResult = SignUpSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  if (!validateEmail(data.email, data.emainConfirm)) {
    return {
      success: false,
      message: "Emails are different",
    };
  }

  const result = await registration(data.email, data.password);

  if (!result.success) {
    return {
      success: false,
      message: result.message,
      error: result.error,
    };
  }

  redirect("/signin");
  return {
    success: true,
    message: "Signed in successfully",
  };
}
