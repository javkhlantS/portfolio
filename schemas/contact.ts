import z from "zod";

export const contactSchema = z.object({
    name: z.string().nonempty("Please enter your name"),
    email: z.email("Please enter a valid email address"),
    subject: z.string().nonempty("Please enter a subject"),
    message: z.string().nonempty("Please enter a message"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
