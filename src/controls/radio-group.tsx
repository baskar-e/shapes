'use client'

import { createSafeContext } from "@/lib/context";
import { cn } from "@/lib/utils";
import { useState, ComponentProps, useId } from "react";

interface RadioContextProps extends ComponentProps<"div"> {
    uniqName?: string;
    value?: string;
    disabled?: boolean;
    required?: boolean;
    handleValueChange?: (value: string) => void
}

type RadioGroupBaseProps = {
    name?: string;
    orientation?: "horizontal" | "vertical"
    disabled?: boolean;
    required?: boolean;
    onValueChange?: (value: string) => void;
} & Omit<ComponentProps<"div">, "value" | "defaultValue">;

type ControlledRadioGroup = {
    value: string;
    defaultValue?: never;
};

type UncontrolledRadioGroup = {
    defaultValue?: string;
    value?: never;
};

type RadioGroupProps = RadioGroupBaseProps & (ControlledRadioGroup | UncontrolledRadioGroup);

type RadioItemProps = {
    id?: string;
    value: string;
    disabled?: boolean
} & ComponentProps<"input">

const [RadioGroupProvider, useRadioGroupContext] = createSafeContext<RadioContextProps>('Combobox');

export function RadioGroup({ name, value: controlledValue, defaultValue = "", onValueChange, children, className, orientation = "horizontal", disabled, required = false, ...props }: RadioGroupProps) {
    const uniqName = name ?? useId();
    const [internalValue, setInternalValue] = useState(defaultValue);

    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const handleValueChange = (newValue: string) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onValueChange?.(newValue);
    };

    return (
        <RadioGroupProvider value={{ uniqName, value, disabled, required, handleValueChange }}>
            <div
                role="radiogroup"
                aria-required={required}
                aria-disabled={disabled}
                data-orientation={orientation}
                className={cn(
                    'flex gap-x-5 gap-y-3 text-sm text-ash dark:text-slate-200',
                    orientation === 'vertical' && 'flex-col',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </RadioGroupProvider>
    );
}

export function RadioGroupItem({ id, value: itemValue, className, disabled: itemDisabled, ...props }: RadioItemProps) {
    const { uniqName, value, disabled: groupDisabled, required, handleValueChange } = useRadioGroupContext();

    const isChecked = value === itemValue;
    const isDisabled = groupDisabled || itemDisabled;

    return (
        <div className="group relative" data-state={isChecked ? 'checked' : 'unchecked'} data-disabled={isDisabled}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={cn(
                    "rounded-full bg-white text-violet-800 shadow-xs group-has-focus-visible:ring-2 group-has-focus-visible:ring-[currentColor]/30 group-has-focus-visible:ring-offset-1 group-has-focus-visible:ring-offset-transparent dark:bg-zinc-800",
                    isDisabled && "opacity-50 cursor-not-allowed grayscale-[0.5]",
                    className
                )}
            >
                <circle cx="12" cy="12" r="12" strokeWidth={isChecked ? "14" : "0"} />
            </svg>
            <input
                id={id}
                type="radio"
                name={uniqName}
                value={itemValue}
                checked={isChecked}
                required={required}
                disabled={isDisabled}
                className="absolute inset-0 opacity-0"
                onChange={() => !isDisabled && handleValueChange?.(itemValue)}
                {...props}
            />
        </div>
    );
}
