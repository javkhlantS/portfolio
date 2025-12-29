import { ComponentProps, FC } from "react";

type Props = ComponentProps<"textarea"> & {
    label: string;
};

const Textarea: FC<Props> = ({ label, ...props }) => {
    return (
        <div className="space-y-2 w-full">
            <label
                htmlFor={props.id}
                className="text-[16px] font-medium leading-[160%] tracking-[0] mb-2 block"
            >
                {label}
            </label>
            <textarea
                id={props.id}
                {...props}
                rows={8}
                className="w-full block bg-[#1a1a1a] rounded-[4px] px-4 py-2.5 text-[16px] leading-[160%] focus:outline-primary resize-none"
            />
        </div>
    );
};

export default Textarea;
