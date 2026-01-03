import {
    IconDeviceDesktop,
    IconDeviceMobile,
    IconPlug,
    IconServer,
    IconTools,
    IconWorld,
} from "@tabler/icons-react";
import { FC } from "react";

const ServicesSection: FC = () => {
    const services = [
        {
            icon: IconWorld,
            title: "Web Application Development",
            description:
                "Modern, fast, and scalable web applications built using proven frameworks and clean architecture. Suitable for startups, internal tools, and production systems.",
        },
        {
            icon: IconDeviceMobile,
            title: "Mobile App Development",
            description:
                "Cross-platform mobile applications for iOS and Android, built with performance and usability in mind. Ideal for MVPs and business-focused mobile solutions.",
        },
        {
            icon: IconDeviceDesktop,
            title: "Frontend Development",
            description:
                "Responsive and user-friendly interfaces focused on usability and performance. I turn designs into clean, maintainable, and accessible UI.",
        },
        {
            icon: IconServer,
            title: "Backend Development & APIs",
            description:
                "Secure and scalable backend systems with well-structured APIs. I design systems that are reliable, easy to maintain, and ready to grow.",
        },
        {
            icon: IconPlug,
            title: "System Integration",
            description:
                "Integration with third-party services such as payment gateways, authentication providers, and external APIs to extend functionality.",
        },
        {
            icon: IconTools,
            title: "Maintenance & Optimization",
            description:
                "Ongoing support, performance improvements, bug fixes, and refactoring to keep your application stable and up to date.",
        },
    ];

    return (
        <section id="services" className="py-16 border-b border-b-dark-gray md:py-20">
            <div className="container">
                <h2 className="uppercase text-white font-bebas-neue text-[43px] font-normal leading-none tracking-[-0.02em] mb-3 md:text-[76px] md:mb-2">
                    Services
                </h2>
                <p className="text-[16px] font-normal leading-[160%] tracking-[0] mb-16 md:text-[18px] md:leading-[150%] md:mb-20 max-w-[600px]">
                    I offer end-to-end web and mobile development services, helping businesses
                    design, build, and scale reliable software solutions.
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
