"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import type { ActionResponse } from "@/actions/auth";

const ProductSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  imageLink: z.string().url("Image link must be a valid URL"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  categoryId: z.coerce.number().int().positive("Category is required"),
});

export async function addNewProduct(
  productData: FormData,
): Promise<ActionResponse> {
  const data = {
    title: productData.get("title") as string,
    description: productData.get("description") as string,
    imageLink: productData.get("image_link") as string,
    price: productData.get("price") as string,
    categoryId: productData.get("category_id") as string,
  };

  const validationResult = ProductSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  await prisma.product.create({
    data: {
      title: validationResult.data.title,
      description: validationResult.data.description,
      imageUrl: validationResult.data.imageLink,
      price: validationResult.data.price,
      categoryId: validationResult.data.categoryId,
    },
  });

  return {
    success: true,
    message: "Product added successfully",
  };
}
