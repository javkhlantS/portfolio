import { ComponentProps, ElementType } from "react";

type LinkButtonProps<T extends ElementType = "button"> = {
    as?: T;
    children: React.ReactNode;
} & ComponentProps<T>;

const LinkButton = <T extends ElementType = "button">({
    as,
    children,
    className: propClassName,
    ...props
}: LinkButtonProps<T>) => {
    const Component = as || ("button" as ElementType);
    const baseClassName =
        "text-primary uppercase text-[14px] font-bold leading-[150%] tracking-[0] pb-1 transition-all duration-300 hover:opacity-80 active:opacity-70 active:scale-95 active:transition-all active:duration-150";
    const className = propClassName ? `${baseClassName} ${propClassName}` : baseClassName;

    return (
        <Component className={className} {...(props as ComponentProps<ElementType>)}>
            {children}
            <span className="block w-full h-0.5 bg-primary transition-all duration-300" />
        </Component>
    );
};

export default LinkButton;
