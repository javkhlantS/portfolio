import { ComponentProps, FC } from "react";

const LinkButton: FC<ComponentProps<"button">> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="text-primary uppercase text-[14px] font-bold leading-[150%] tracking-[0] pb-1"
        >
            {children}

            <span className="block w-full h-0.5 bg-primary" />
        </button>
    );
};

export default LinkButton;
