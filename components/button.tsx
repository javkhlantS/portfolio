import { IconLoader2 } from "@tabler/icons-react";
import { ComponentProps, ElementType } from "react";

type ButtonProps<T extends ElementType = "button"> = {
    as?: T;
    children: React.ReactNode;
    loading?: boolean;
} & ComponentProps<T>;

const Button = <T extends ElementType = "button">({
    as,
    children,
    loading = false,
    className: propClassName,
    disabled,
    ...props
}: ButtonProps<T>) => {
    const Component = as || ("button" as ElementType);
    const isDisabled = disabled || loading;
    const baseClassName =
        "py-4 px-6 bg-primary text-dark text-[14px] font-bold leading-none tracking-[0] uppercase rounded-[100px] flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-95 active:transition-all active:duration-150";
    const disabledClassName = isDisabled
        ? "opacity-60 cursor-not-allowed hover:scale-100 hover:brightness-100"
        : "";
    const className = propClassName
        ? `${baseClassName} ${disabledClassName} ${propClassName}`
        : `${baseClassName} ${disabledClassName}`;

    return (
        <Component
            className={className}
            disabled={isDisabled}
            {...(props as ComponentProps<ElementType>)}
        >
            {loading && <IconLoader2 size={14} className="animate-spin" />}
            {children}
        </Component>
    );
};

export default Button;
