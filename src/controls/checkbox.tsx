import React, { useId } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

type CheckboxProps = {
    label?: string;
    description?: string;
} & React.ComponentProps<'input'>

export const Checkbox = ({ label, description, className, ...props }: CheckboxProps) => {
    const id = useId();

    return (
        <div className={cn("group grid items-center gap-x-3 gap-y-1", (label || description) && "grid-cols-[auto_1fr]")}>
            <div className={cn(
                "relative flex items-center justify-center size-4.5 rounded text-white bg-white shrink-0 shadow-md transition-all duration-200 dark:bg-zinc-700/50",
                "has-checked:bg-violet-800 has-checked:border-violet-800 dark:has-checked:bg-violet-800 dark:has-checked:border-violet-800",
                "has-focus-visible:ring-2 has-focus-visible:ring-violet-500 has-focus-visible:ring-offset-1 dark:has-focus-visible:ring-offset-zinc-700/50",
                "has-disabled:opacity-50 dark:has-disabled:opacity-70",
                className
            )}>
                <input
                    id={id}
                    type="checkbox"
                    className="peer absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed z-10 focus-visible:outine-none"
                    {...props}
                />
                <CheckIcon className="peer-not-checked:hidden stroke-current w-3.5 pointer-events-none" />
            </div>
            {label && (
                <label
                    htmlFor={id}
                    className="text-sm font-medium text-ash cursor-pointer group-has-disabled:cursor-not-allowed group-has-disabled:opacity-70 dark:text-slate-200"
                >
                    {label}
                </label>
            )}
            {description && (
                <p className="col-start-2 text-sm text-gray-500 group-has-disabled:opacity-70 dark:text-gray-400">{description}</p>
            )}
        </div>
    );
};
