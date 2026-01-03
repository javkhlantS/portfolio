import { Project } from "@/@types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import LinkButton from "./link-button";

type ProjectItemProps = {
    project: Project;
};

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className="flex flex-col gap-10 items-start md:flex-row md:items-start md:gap-12">
            <div className="w-full h-[343px] bg-dark-gray rounded-[12px] overflow-hidden shrink-0 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] relative group">
                <Image
                    src={project.picture_url}
                    alt={project.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                />

                {project.alt_picture_url && (
                    <Image
                        src={project.alt_picture_url}
                        alt={project.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                )}
            </div>

            <div className="flex-1">
                <h3 className="text-white text-2xl font-medium leading-[140%] tracking-[0] mb-4 md:text-[32px]">
                    {project.title}
                </h3>
                {project.description && (
                    <p className="mb-8 text-[16px] font-normal leading-[160%] tracking-[0] md:text-[18px] md:leading-[150%]">
                        {project.description}
                    </p>
                )}

                {(project.year || project.role) && (
                    <div className="mb-10 md:mb-12">
                        <h4 className="uppercase text-white text-[16px] font-semibold leading-[150%] tracking-[0] mb-4 ">
                            Project Info
                        </h4>

                        {project.year && (
                            <div className="py-4 border-t border-t-dark-gray flex items-center justify-between">
                                <span className="text-white text-[16px] font-medium leading-[160%] tracking-[0]">
                                    Year
                                </span>
                                <span className="text-[16px] font-medium leading-[160%] tracking-[0]">
                                    {project.year}
                                </span>
                            </div>
                        )}

                        {project.role && (
                            <div className="py-4 border-t border-dark-gray border-b flex items-center justify-between">
                                <span className="text-white text-[16px] font-medium leading-[160%] tracking-[0]">
                                    Role
                                </span>
                                <span className="text-[16px] font-medium leading-[160%] tracking-[0]">
                                    {project.role}
                                </span>
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-6">
                    {project.live_url && (
                        <LinkButton as={Link} href={project.live_url} target="_blank">
                            Live Demo
                        </LinkButton>
                    )}
                    {project.github_url && (
                        <LinkButton as={Link} href={project.github_url} target="_blank">
                            See on Github
                        </LinkButton>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
