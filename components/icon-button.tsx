import { ComponentProps, ElementType } from "react";

type IconButtonProps<T extends ElementType = "button"> = {
    as?: T;
    children: React.ReactNode;
} & ComponentProps<T>;

const IconButton = <T extends ElementType = "button">({
    as,
    children,
    className: propClassName,
    ...props
}: IconButtonProps<T>) => {
    const Component = as || ("button" as ElementType);
    const baseClassName =
        "size-12 rounded-full flex items-center justify-center bg-[#222222] text-primary transition-all duration-300 hover:scale-110 hover:bg-[#2a2a2a] active:scale-95 active:bg-[#1a1a1a] active:transition-all active:duration-150";
    const className = propClassName ? `${baseClassName} ${propClassName}` : baseClassName;

    return (
        <Component className={className} {...(props as ComponentProps<ElementType>)}>
            {children}
        </Component>
    );
};

export default IconButton;
