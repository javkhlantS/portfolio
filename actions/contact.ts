"use server";

import { contactSchema } from "@/schemas/contact";
import { actionClient } from "@/utils/lib/safe-action";
import { createClient } from "@/utils/supabase/server";
import { flattenValidationErrors } from "next-safe-action";

export const contactAction = actionClient
    .inputSchema(contactSchema, {
        handleValidationErrorsShape: async (ve) => flattenValidationErrors(ve).fieldErrors,
    })
    .action(async ({ parsedInput }) => {
        const { name, email, subject, message } = parsedInput;

        const client = await createClient();
        const { error } = await client.from("contact_request").insert({
            name,
            email,
            subject,
            message,
        });

        if (error) {
            throw new Error(error.message);
        }

        return {
            success: true,
            message: "Contact request sent successfully",
        };
    });
