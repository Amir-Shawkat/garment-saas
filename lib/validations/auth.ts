import * as z from "zod";

const passwordSchema = z.string().min(8, "Password must be at least 8 characters");

export const BuyerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  organization: z.string().optional(),
  email: z.string().email(),
  password: passwordSchema,
  confirmPassword: passwordSchema,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const SellerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  organization: z.string().min(2, "Org name is required"),
  location: z.string().min(1, "Location is required"),
  category: z.enum(["tech", "marketing", "design"]),
  experience: z.string(),
  password: passwordSchema,
  confirmPassword: passwordSchema,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});