import { Project } from "@/@types";
import { getHostUrl } from "@/utils/server";
import { FC } from "react";
import ProjectItem from "./project-item";

const ProjectsSection: FC = async () => {
    const projects = await fetch(`${await getHostUrl()}/api/projects`, {
        next: { tags: ["projects"] },
        cache: "force-cache",
    }).then((res) => res.json() as Promise<Project[]>);

    return (
        <section id="projects" className="py-16 border-b border-b-dark-gray md:py-20">
            <div className="container">
                <h2 className="uppercase text-white font-bebas-neue text-[43px] font-normal leading-none tracking-[-0.02em] mb-3 md:text-[76px] md:mb-2">
                    Featured Projects
                </h2>
                <p className="text-[16px] font-normal leading-[160%] tracking-[0] mb-16 md:text-[18px] md:leading-[150%] md:mb-20 max-w-[600px]">
                    A collection of projects where I’ve helped businesses and startups design,
                    build, and launch reliable web and mobile applications. Each project focuses on
                    solving real problems with clean, scalable, and maintainable code.
                </p>

                <div className="space-y-24 md:space-y-[120px]">
                    {projects?.map((project) => (
                        <ProjectItem key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
