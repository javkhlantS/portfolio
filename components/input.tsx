import { ComponentProps, FC } from "react";

type Props = ComponentProps<"input"> & {
    label: string;
};

const Input: FC<Props> = ({ label, ...props }) => {
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
                className="w-full block bg-[#1a1a1a] rounded-[4px] px-4 py-2.5 text-[16px] leading-[160%] focus:outline-primary"
            />
        </div>
    );
};

export default Input;
