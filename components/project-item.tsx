import { FC } from "react";
import LinkButton from "./link-button";

const ProjectItem: FC = () => {
    return (
        <div className="flex flex-col gap-10 items-start md:flex-row md:items-start md:gap-12">
            <div className="w-full h-[343px] bg-dark-gray rounded-[12px] overflow-hidden shrink-0 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"></div>

            <div>
                <h3 className="text-white text-2xl font-medium leading-[140%] tracking-[0] mb-4 md:text-[32px]">
                    Promotional landing page for our favorite show
                </h3>
                <p className="mb-8 text-[16px] font-normal leading-[160%] tracking-[0] md:text-[18px] md:leading-[150%]">
                    Teamed up with a designer to breathe life into a promotional webpage for our
                    beloved show, Adventure Time. Delivered a fully responsive design with dynamic
                    content capabilities, seamlessly integrating a newsletter feature to keep fans
                    updated with the latest adventures.
                </p>

                <div className="mb-10 md:mb-12">
                    <h4 className="uppercase text-white text-[16px] font-semibold leading-[150%] tracking-[0] mb-4 ">
                        Project Info
                    </h4>

                    <div className="py-4 border-t border-t-dark-gray flex items-center justify-between">
                        <span className="text-white text-[16px] font-medium leading-[160%] tracking-[0]">
                            Year
                        </span>
                        <span className="text-[16px] font-medium leading-[160%] tracking-[0]">
                            2024
                        </span>
                    </div>

                    <div className="py-4 border-t border-dark-gray border-b flex items-center justify-between">
                        <span className="text-white text-[16px] font-medium leading-[160%] tracking-[0]">
                            Role
                        </span>
                        <span className="text-[16px] font-medium leading-[160%] tracking-[0]">
                            Developer
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <LinkButton>Live Demo</LinkButton>
                    <LinkButton>See on Github</LinkButton>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
