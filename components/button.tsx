import { ComponentProps, FC } from "react";

const Button: FC<ComponentProps<"button">> = ({ children, ...props }) => {
    return (
        <button
            className="py-4 px-6 bg-primary text-dark text-[14px] font-bold leading-none tracking-[0] uppercase rounded-[100px] flex items-center gap-3"
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
