'use client'

import { ComponentProps, RefObject, useRef } from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { createSafeContext } from "@/lib/context";

type AlignType = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';

type InputGroupProps = {
    className?: string;
} & ComponentProps<"div">;

type InputGroupAddonProps = {
    className?: string;
    align?: AlignType;
} & ComponentProps<"div">;

const [InputGroupProvider, useInputGroupContext] = createSafeContext<RefObject<HTMLInputElement | null>>('InputGroup');

export function InputGroup({ className, ...props }: InputGroupProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <InputGroupProvider value={inputRef}>
            <div
                role="group"
                className={cn(
                    "group/input-group flex items-stretch w-full rounded-lg border border-slate-300 overflow-hidden has-data-[align*=block-]:flex-col",
                    "focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-2 focus-within:ring-offset-violet-300",
                    className
                )}
                {...props}
            />
        </InputGroupProvider>
    );
}

export function InputGroupAddon({ className, align = 'inline-start', onClick, ...props }: InputGroupAddonProps) {
    const internalRef = useInputGroupContext();

    const alignClasses = {
        'inline-start': 'order-first',
        'inline-end': 'order-last',
        'block-start': 'order-first',
        'block-end': 'order-last',
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        internalRef?.current?.focus();
        onClick?.(e);
    };

    return (
        <div
            role="group"
            data-align={align}
            className={cn(
                "flex items-center gap-2.5 text-sm text-slate-400 font-medium select-none cursor-text group-has-disabled/input-group:cursor-not-allowed group-has-disabled/input-group:opacity-50",
                align === 'inline-start' && 'pl-2.5',
                align === 'inline-end' && 'pr-2.5',
                align === 'block-start' && 'px-2.5 pt-2 pb-1',
                align === 'block-end' && 'px-2.5 pt-1 pb-2',
                alignClasses[align],
                className
            )}
            onClick={handleClick}
            {...props}
        />
    );
}

export const InputGroupInput = ({ ref: externalRef, className, ...props }: ComponentProps<"input">) => {
    const internalRef = useInputGroupContext();

    return (
        <Input
            ref={(node) => {
                if (internalRef) {
                    internalRef.current = node;
                }
                if (typeof externalRef === 'function') {
                    externalRef(node);
                } else if (externalRef) {
                    externalRef.current = node;
                }
            }}
            className={cn(
                "flex-1 bg-transparent border-0",
                "placeholder:text-slate-400",
                className
            )}
            {...props}
        />
    );
}

InputGroupInput.displayName = "InputGroupInput";

