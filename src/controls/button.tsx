'use client'

import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white' | 'outline';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

const buttonVariants: Record<ButtonVariant, string> = {
    primary: "bg-violet-500 text-white data-[disabled=false]:hover:bg-violet-600 focus-visible:ring-2 focus-visible:ring-violet-500",
    secondary: "bg-blue-500 text-white data-[disabled=false]:hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500",
    ghost: "bg-gray-200 border border-gray-300 data-[disabled=false]:hover:bg-gray-300 focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:border-gray-500 dark:bg-gray-300/90 dark:text-slate-800 data-[disabled=false]:dark:hover:bg-gray-300/80",
    outline: "bg-transparent border border-gray-300 data-[disabled=false]:hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:border-gray-400 dark:border-zinc-500 data-[disabled=false]:dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-700 dark:focus-visible:border-zinc-700",
    white: "bg-white data-[disabled=false]:hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:border-gray-300 dark:text-slate-800 data-[disabled=false]:dark:hover:bg-gray-200",
};

const buttonSizes: Record<ButtonSize, string> = {
    xs: "rounded-md px-2 py-1 text-xs",
    sm: "rounded-md px-2.5 py-[0.3rem] text-[0.8rem]",
    md: "rounded-lg px-2.5 py-1.5 text-sm",
    lg: "rounded-lg px-3 py-2 text-sm",
};

interface ButtonProps extends React.ComponentProps<"button"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
}

export function Button({ className, variant, size = "md", type = 'button', loading = false, disabled = false, ...props }: ButtonProps) {
    return (
        <button
            type={type}
            aria-busy={loading}
            data-variant={variant}
            data-size={size}
            data-loading={loading}
            data-disabled={disabled || loading}
            className={cn(
                "inline-flex items-center justify-center text-slate-800 font-medium shrink-0 focus-visible:z-10 focus-visible:outline-none transition-colors data-[loading=true]:cursor-wait data-[loading=true]:opacity-70 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 dark:text-slate-200",
                variant && buttonVariants[variant],
                size && buttonSizes[size],
                className
            )}
            disabled={disabled || loading}
            {...props}
        />
    );
}


