import { ComponentProps, ElementType } from "react";

type ButtonProps<T extends ElementType = "button"> = {
    as?: T;
    children: React.ReactNode;
} & ComponentProps<T>;

const Button = <T extends ElementType = "button">({
    as,
    children,
    className: propClassName,
    ...props
}: ButtonProps<T>) => {
    const Component = as || ("button" as ElementType);
    const baseClassName =
        "py-4 px-6 bg-primary text-dark text-[14px] font-bold leading-none tracking-[0] uppercase rounded-[100px] flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-95 active:transition-all active:duration-150";
    const className = propClassName ? `${baseClassName} ${propClassName}` : baseClassName;

    return (
        <Component className={className} {...(props as ComponentProps<ElementType>)}>
            {children}
        </Component>
    );
};

export default Button;
