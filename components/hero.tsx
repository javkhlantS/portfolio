import { IconBrandGithub, IconBrandLinkedinFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Button from "./button";
import IconButton from "./icon-button";

const HeroSection: FC = () => {
    return (
        <section className="border-b border-b-dark-gray mt-10 pb-16 md:pb-20 md:mt-[30px]">
            <div className="container flex flex-col gap-16 items-start md:flex-row md:items-center md:gap-20">
                <div>
                    <h1 className="uppercase text-white font-bebas-neue text-[57px] font-normal leading-none tracking-[0] mb-3 md:text-[101px] md:leading-[90%]">
                        Freelance Software Developer
                    </h1>
                    <p className="text-[16px] font-regular leading-[160%] tracking-[0] mb-8 md:text-[18px] md:leading-[150%]">
                        I help startups and businesses turn ideas into fast, secure, and
                        maintainable web and mobile applications. From MVPs to production systems, I
                        focus on clean code, performance, and real-world results.
                    </p>

                    <div className="flex items-center gap-4">
                        <Button as={Link} href={"#contact"}>
                            Contact me
                        </Button>
                        <IconButton>
                            <IconBrandLinkedinFilled size={24} />
                        </IconButton>
                        <IconButton>
                            <IconBrandGithub size={24} />
                        </IconButton>
                    </div>
                </div>

                <div className="w-full h-[400px] md:w-[400px] md:h-[500px] lg:w-[600px] lg:h-[700px] overflow-hidden  rounded-2xl shrink-0">
                    <Image
                        src={"/svg/hero/hero_ill.svg"}
                        alt="Javkhlant"
                        className="w-full h-full object-contain"
                        width={600}
                        height={700}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
