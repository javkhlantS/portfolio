import { IconCode, IconDeviceDesktop, IconPalette } from "@tabler/icons-react";
import { FC } from "react";

const ServicesSection: FC = () => {
    const services = [
        {
            icon: IconCode,
            title: "Web Development",
            description:
                "Building responsive and accessible websites using modern technologies and best practices.",
        },
        {
            icon: IconDeviceDesktop,
            title: "Front-End Development",
            description:
                "Creating engaging user interfaces with focus on performance, accessibility, and user experience.",
        },
        {
            icon: IconPalette,
            title: "UI/UX Implementation",
            description:
                "Transforming design mockups into pixel-perfect, interactive web experiences.",
        },
    ];

    return (
        <section id="services" className="py-16 border-b border-b-dark-gray md:py-20">
            <div className="container">
                <h2 className="uppercase text-white font-bebas-neue text-[43px] font-normal leading-none tracking-[-0.02em] mb-3 md:text-[76px] md:mb-2">
                    Services
                </h2>
                <p className="text-[16px] font-normal leading-[160%] tracking-[0] mb-16 md:text-[18px] md:leading-[150%] md:mb-20 max-w-[600px]">
                    I offer a range of front-end development services to help bring your digital
                    vision to life.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div key={index} className="flex flex-col">
                                <IconComponent
                                    size={48}
                                    stroke={1.5}
                                    className="text-primary mb-6"
                                />
                                <h3 className="text-white text-2xl font-medium leading-[140%] tracking-[0] mb-4 md:text-[32px]">
                                    {service.title}
                                </h3>
                                <p className="text-[16px] font-normal leading-[160%] tracking-[0] md:text-[18px] md:leading-[150%]">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
