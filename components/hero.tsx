import { IconBrandGithub, IconBrandLinkedinFilled } from "@tabler/icons-react";
import { FC } from "react";
import Button from "./button";
import IconButton from "./icon-button";

const HeroSection: FC = () => {
    return (
        <section className="border-b border-b-dark-gray mt-10 pb-16 md:pb-20 md:mt-[30px]">
            <div className="container flex flex-col gap-16 items-start md:flex-row md:items-center md:gap-20">
                <div>
                    <h1 className="uppercase text-white font-bebas-neue text-[57px] font-normal leading-none tracking-[0] mb-3 md:text-[101px] md:leading-[90%]">
                        hi, i am robert garcia.
                    </h1>
                    <p className="text-[16px] font-regular leading-[160%] tracking-[0] mb-8 md:text-[18px] md:leading-[150%]">
                        A Sydney based front-end developer passionate about building accessible and
                        user friendly websites.
                    </p>

                    <div className="flex items-center gap-4">
                        <Button>Contact me</Button>
                        <IconButton>
                            <IconBrandLinkedinFilled size={24} />
                        </IconButton>
                        <IconButton>
                            <IconBrandGithub size={24} />
                        </IconButton>
                    </div>
                </div>

                <div className="w-full h-[400px] md:w-[600px] md:h-[700px] overflow-hidden bg-offwhite rounded-2xl shrink-0"></div>
            </div>
        </section>
    );
};

export default HeroSection;
