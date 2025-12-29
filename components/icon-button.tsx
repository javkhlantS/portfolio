import { ComponentProps, FC } from "react";

const IconButton: FC<ComponentProps<"button">> = ({ children, ...props }) => {
    return (
        <button
            className="size-12 rounded-full flex items-center justify-center bg-[#222222] text-primary"
            {...props}
        >
            {children}
        </button>
    );
};

export default IconButton;
