import { cache } from "react";
import { prisma } from "./prisma";
import { ActionResponse } from "@/actions/auth";
export const getCurrentUser = cache(async () => {});

export const getUserByEmail = cache(async (email: string) => {
  try {
    return await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        name: true,
        roleId: true,
      },
    });
  } catch (error) {
    console.error("Error getting user by email:", error);
    return null;
  }
});

export const createNewUser = async (
  email: string,
  password: string,
): Promise<ActionResponse> => {
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
        name: "",
        roleId: 2,
      },
    });

    return {
      success: true,
      message: "Account succesfully created",
    };
  } catch (error) {
    console.error("Error getting user by email:", error);
    return {
      success: false,
      message: "Account succesfully created",
    };
  }
};
