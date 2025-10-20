import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  price: z.number().positive("Price must be greater than 0"),
  category: z.enum(["electronics", "clothing", "books"])
});

export const productUpdateSchema = z.object({
  name: z.string().min(3).optional(),
  price: z.number().positive().optional(),
  category: z.enum(["electronics", "clothing", "books"]).optional()
});
