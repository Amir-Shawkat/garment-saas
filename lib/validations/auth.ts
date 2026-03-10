import * as z from "zod";

const passwordSchema = z.string().min(8, "Password must be at least 8 characters");

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

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
  certification: z.any().refine((file) => file?.size <= MAX_FILE_SIZE, "File size must be less than 5MB")
    .refine((file) => ACCEPTED_TYPES.includes(file?.type), "Only .pdf, .doc and .docx formats are supported."),
  factorycategory: z.enum(["apparel", "sportswear", "home-textiles", "knitted-goods"]),
  fabrictype: z.enum(["cotton", "polyester", "wool", "silk"]),
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