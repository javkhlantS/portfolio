import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedinFilled,
    IconBrandX,
} from "@tabler/icons-react";
import { FC } from "react";
import Button from "../button";
import IconButton from "../icon-button";
import Input from "../input";
import Textarea from "../textarea";

const Footer: FC = () => {
    return (
        <footer id="contact" className="py-16 md:py-20">
            <div className="container flex flex-col gap-16 items-start md:flex-row md:gap-6 md:items-stretch">
                <div className="flex flex-col justify-between md:w-1/2">
                    <div>
                        <h2 className="uppercase text-white font-bebas-neue text-[43px] font-normal leading-none tracking-[-0.02em] mb-4">
                            Let’s connect
                        </h2>
                        <p className="text-[16px] font-normal leading-[160%] tracking-[0] mb-10 ">
                            Say hello at{" "}
                            <a href="mailto:hello@javkhlant.com">hello@javkhlant.com</a> <br /> or
                            find me on social media
                        </p>

                        <div className="flex items-center gap-8">
                            <IconButton>
                                <IconBrandLinkedinFilled size={24} />
                            </IconButton>
                            <IconButton>
                                <IconBrandGithub size={24} />
                            </IconButton>
                            <IconButton>
                                <IconBrandX size={24} />
                            </IconButton>
                            <IconButton>
                                <IconBrandInstagram size={24} />
                            </IconButton>
                        </div>
                    </div>

                    <p className="text-[16px] font-medium text-white leading-[160%] tracking-[0] hidden md:block">
                        © 2025 Javkhlant. All rights reserved.
                    </p>
                </div>

                <div className="space-y-8 w-full md:w-1/2">
                    <form className="space-y-6">
                        <Input label="Name" id="name" name="name" />
                        <Input label="Email" id="email" name="email" type="email" />
                        <Input label="Subject" id="subject" name="subject" />
                        <Textarea label="Message" id="message" name="message" />
                    </form>
                    <Button>Submit</Button>
                </div>
            </div>

            <div className="container mt-20 md:hidden">
                <p className="text-[16px] font-medium text-white leading-[160%] tracking-[0]">
                    © 2025 Javkhlant. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
