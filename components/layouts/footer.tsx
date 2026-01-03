import { SocialUrl } from "@/@types";
import { getHostUrl } from "@/utils/server";
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedinFilled,
    IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { FC } from "react";
import ContactForm from "../contact-form";
import IconButton from "../icon-button";

const year = new Date().getFullYear();
const email = " javkhlant.altankhuyag@gmail.com";

const Footer: FC = async () => {
    const socialUrl = await fetch(`${await getHostUrl()}/api/social_url`, {
        next: { tags: ["social_url"] },
        cache: "force-cache",
    }).then((res) => res.json() as Promise<SocialUrl>);

    return (
        <footer id="contact" className="py-16 md:py-20">
            <div className="container flex flex-col gap-16 items-start md:flex-row md:gap-6 md:items-stretch">
                <div className="flex flex-col justify-between md:w-1/2">
                    <div>
                        <h2 className="uppercase text-white font-bebas-neue text-[43px] font-normal leading-none tracking-[-0.02em] mb-4">
                            Let’s connect
                        </h2>
                        <p className="text-[16px] font-normal leading-[160%] tracking-[0] mb-10 ">
                            Say hello at <a href={`mailto:${email}`}>{email}</a> <br /> or find me
                            on social media
                        </p>

                        <div className="flex items-center gap-8">
                            {socialUrl.linkedin && (
                                <IconButton as={Link} href={socialUrl.linkedin} target="_blank">
                                    <IconBrandLinkedinFilled size={24} />
                                </IconButton>
                            )}
                            {socialUrl.github && (
                                <IconButton as={Link} href={socialUrl.github} target="_blank">
                                    <IconBrandGithub size={24} />
                                </IconButton>
                            )}
                            {socialUrl.twitter && (
                                <IconButton as={Link} href={socialUrl.twitter} target="_blank">
                                    <IconBrandX size={24} />
                                </IconButton>
                            )}
                            {socialUrl.instagram && (
                                <IconButton as={Link} href={socialUrl.instagram} target="_blank">
                                    <IconBrandInstagram size={24} />
                                </IconButton>
                            )}
                        </div>
                    </div>

                    <p className="text-[16px] font-medium text-white leading-[160%] tracking-[0] hidden md:block">
                        © {year}
                    </p>
                </div>

                <ContactForm />
            </div>

            <div className="container mt-20 md:hidden">
                <p className="text-[16px] font-medium text-white leading-[160%] tracking-[0]">
                    © {year}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
