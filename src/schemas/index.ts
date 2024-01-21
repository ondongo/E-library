import { z } from "zod";

export const LoginInSchema = z.object({
  email: z.string().email("zodEmailError"),
  password: z.string().min(8, "zodPasswordError"),
});

const frenchPhoneNumberRegex = /^(\+33|0)([1-9])(\d{2}){4}$/;
const senegalesePhoneNumberRegex =
  /^(?:\+221|00)(7[0-9]|8[135-9]|9[0-5])\d{7}$/;

const combinedPhoneNumberRegex = new RegExp(
  `(${frenchPhoneNumberRegex.source})|(${senegalesePhoneNumberRegex.source})`
);
export const RegisterSchema = z.object({
  email: z.string().email("zodEmailError"),
  password: z.string().min(8, "zodPasswordError"),
  lastName: z.string(),
  firstName: z.string(),
  phoneNumber: z.string().regex(combinedPhoneNumberRegex, "Invalid Number!"),
});

export const PasswordSchema = z.object({
  password: z.string().min(8, "zodPasswordError"),
});

export const EmailSchema = z.object({
  email: z.string().email({
    message: "zodEmailError",
  }),
});

export const PasswordChangeSchema = z
  .object({
    currentPassword: z.string().min(8, "zodPasswordError"),
    newPassword: z.string().min(8, "zodPasswordError"),
    newPasswordConfirmation: z.string().min(8, "zodPasswordError"),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirmation, {
    message: "inCoherentPasswordsError",
    path: ["newPasswordConfirmation"],
  });

export const SearchSchema = z.object({
  name: z.string().min(1, "Min 1 caractère"),
});
export type PasswordChangeType = z.infer<typeof PasswordChangeSchema>;
export type LogInType = z.infer<typeof LoginInSchema>;
export type RegisterType = z.infer<typeof RegisterSchema>;
export type SearchType = z.infer<typeof SearchSchema>;
