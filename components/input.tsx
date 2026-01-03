import { ComponentProps, FC } from "react";

type Props = ComponentProps<"input"> & {
    label: string;
    error?: string;
};

const Input: FC<Props> = ({ label, error, className, ...props }) => {
    return (
        <div className="space-y-2 w-full">
            <label
                htmlFor={props.id}
                className="text-[16px] font-medium leading-[160%] tracking-[0] mb-2 block"
            >
                {label}
            </label>
            <input
                id={props.id}
                {...props}
                className={`w-full block bg-[#1a1a1a] rounded-[4px] px-4 py-2.5 text-[16px] leading-[160%] focus:outline-primary ${
                    error
                        ? "border border-red-500 focus:outline-red-500 focus:border-red-500"
                        : "border border-transparent"
                } ${className || ""}`}
            />
            {error && <p className="text-[14px] text-red-500 leading-[160%] mt-1">{error}</p>}
        </div>
    );
};

export default Input;
