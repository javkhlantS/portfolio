"use client";

import { contactAction } from "@/actions/contact";
import { contactSchema, ContactSchema } from "@/schemas/contact";
import { IconCircleCheck } from "@tabler/icons-react";
import { useAction } from "next-safe-action/hooks";
import { FC, useState } from "react";
import Button from "./button";
import Input from "./input";
import Textarea from "./textarea";

const ContactForm: FC = () => {
    const [success, setSuccess] = useState(false);
    const [values, setValues] = useState<ContactSchema>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<ContactSchema>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { execute, isPending } = useAction(contactAction, {
        onSuccess: () => {
            setSuccess(true);
        },
        onError: () => {
            setSuccess(false);
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const field = e.target.name as keyof ContactSchema;
        setValues((prev) => ({ ...prev, [field]: e.target.value }));
        setErrors((prev) => ({ ...prev, [field]: "" }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = contactSchema.safeParse(values);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors({
                name: fieldErrors.name?.[0] || "",
                email: fieldErrors.email?.[0] || "",
                subject: fieldErrors.subject?.[0] || "",
                message: fieldErrors.message?.[0] || "",
            });
        } else {
            // Clear errors if validation passes
            setErrors({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            execute({
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,
            });
        }
    };

    return (
        <div className="space-y-8 w-full md:w-1/2">
            {success && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-[8px]">
                    <IconCircleCheck size={24} className="text-green-500 shrink-0" />
                    <p className="text-[16px] font-medium text-green-500 leading-[160%]">
                        Message sent successfully! I will contact back as soon as possible.
                    </p>
                </div>
            )}
            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                <Input
                    label="Name"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <Input
                    label="Subject"
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    error={errors.subject}
                />
                <Textarea
                    label="Message"
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    error={errors.message}
                />
            </form>
            <Button type="submit" form="contact-form" loading={isPending}>
                Submit
            </Button>
        </div>
    );
};

export default ContactForm;

