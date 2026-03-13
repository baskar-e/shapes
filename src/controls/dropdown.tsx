'use client'

import { ComponentProps, KeyboardEvent, MouseEvent, ReactNode, Ref, RefObject, useRef, useState } from 'react';
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    OffsetOptions,
    OpenChangeReason,
    useDismiss,
    useClick,
    useRole,
    useInteractions,
    useListNavigation,
    useListItem,
    FloatingFocusManager,
    FloatingList,
    FloatingPortal,
    useTransitionStyles,
    useMergeRefs,
    Alignment,
    Side,
    FloatingOverlay,
    size,
    limitShift,
} from '@floating-ui/react';
import { cn } from '@/lib/utils';
import { FloatingContextType } from '@/types';
import { createSafeContext } from '@/lib/context';

type DropdownProps = {
    children: ReactNode
    align?: Alignment | 'center'
    side?: Side
    space?: OffsetOptions
    open?: boolean
    onOpen?: (open: boolean, event?: Event, reason?: OpenChangeReason) => void
}

type DropdownContentProps = {
    portal?: RefObject<HTMLElement | null>
    modal?: boolean
} & ComponentProps<"div">

type DropdownItemProps = {
    onSelect?: (e: Event) => void;
} & ComponentProps<"div">

const [DropdownProvider, useDropdownContext] = createSafeContext<FloatingContextType>('Dropdown');

export function Dropdown({ open, onOpen, children, align = 'center', side = 'bottom', space = 8 }: DropdownProps) {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = open ?? internalOpen;
    const setIsOpen = onOpen ?? setInternalOpen;

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const listRef = useRef<Array<HTMLElement | null>>([]);

    const { refs, context, placement, floatingStyles } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: align === 'center' ? side : `${side}-${align}`,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(space),
            flip({ padding: 5 }),
            shift({ padding: 5, limiter: limitShift() }),
            size({
                apply({ elements, availableHeight }) {
                    const child = elements.floating;
                    if (child) {
                        child.style.setProperty('--dropdown-h', `${availableHeight - 10}px`);
                    }
                },
            }),
        ]
    });

    const listNav = useListNavigation(context, {
        listRef,
        activeIndex,
        onNavigate: setActiveIndex,
        loop: true,
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: 'menu' });

    const { getFloatingProps, getReferenceProps, getItemProps } = useInteractions([click, dismiss, role, listNav]);

    return (
        <DropdownProvider value={{ isOpen, listRef, activeIndex, refs, context, placement, floatingStyles, setIsOpen, getFloatingProps, getReferenceProps, getItemProps }}>
            {children}
        </DropdownProvider>
    );
}

export function DropdownButton<T extends HTMLButtonElement>({ ref: externalRef, children, className, ...props }: ComponentProps<"button"> & { ref?: Ref<T> }) {
    const { isOpen, refs, getReferenceProps } = useDropdownContext();
    const mergedRef = useMergeRefs([refs.setReference, externalRef]);

    return (
        <button
            ref={mergedRef as Ref<HTMLButtonElement>}
            aria-haspopup='menu'
            data-state={isOpen ? 'open' : 'closed'}
            data-slot='dropdown-button'
            className={cn("px-4 py-2 text-ash text-sm rounded-md border w-fit", className)}
            {...getReferenceProps(props)}
        >
            {children}
        </button>
    );
}

export function DropdownContent({ children, className, portal, modal = false, ...props }: DropdownContentProps) {
    const { refs, listRef, placement, floatingStyles, getFloatingProps, context } = useDropdownContext();
    const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
        duration: 200,
        initial: {
            opacity: 0,
            transform: 'scale(0.8)',
        },
        open: () => ({
            opacity: 1,
            transform: 'scale(1)',
        }),
        common: ({ side }) => ({
            transformOrigin: {
                top: 'bottom',
                bottom: 'top',
                left: 'right',
                right: 'left',
            }[side],
        }),
    });
    const [side, align] = placement.split('-');

    if (!isMounted) return null;
    
    const content = (
        <FloatingFocusManager context={context} modal={modal}>
            <div
                ref={refs.setFloating}
                style={{ ...floatingStyles, zIndex: 50 }}
                {...getFloatingProps()}
            >
                <div
                    {...props}
                    data-state={isMounted ? 'open' : 'closed'}
                    data-slot='dropdown-content'
                    data-align={align ?? 'center'}
                    data-side={side}
                    className={cn("min-w-48 rounded-lg border p-1.5 shadow-md bg-white/20 backdrop-blur-md border-white/30 space-y-1 dark:bg-slate-950/70 dark:backdrop-blur-lg dark:border-slate-800/50 z-50 max-h-(--dropdown-h) overflow-y-auto custom-scrollbar", className)}
                    style={transitionStyles}
                >
                    <FloatingList elementsRef={listRef}>
                        {children}
                    </FloatingList>
                </div>
            </div>
        </FloatingFocusManager>
    )

    return (
        <FloatingPortal root={portal}>
            {!modal ? content : <FloatingOverlay className='z-50' lockScroll>{content}</FloatingOverlay>}
        </FloatingPortal>
    );
}

export function DropdownItem({ children, className, onSelect, ...props }: DropdownItemProps) {
    const { activeIndex, setIsOpen, getItemProps } = useDropdownContext();
    const { ref, index } = useListItem();
    const isActive = activeIndex === index;

    return (
        <div
            className={cn("relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2 text-sm text-slate-800 outline-none transition-colors duration-200 hover:bg-white/50 hover:shadow-md hover:ring-1 hover:ring-white/80 dark:hover:bg-slate-800/60 focus-visible:bg-white/50 focus-visible:shadow-md focus-visible:ring-1 focus-visible:ring-white/80", className)}
            {...getItemProps({
                ...props,
                ref,
                role: "menuitem",
                'aria-selected': isActive,
                tabIndex: isActive ? 0 : -1,
                onClick(e: MouseEvent<HTMLDivElement>) {
                    onSelect?.(e);
                    if (!e.defaultPrevented) {
                        setIsOpen(false);
                    }
                },
                onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        onSelect?.(e);
                        if (!e.defaultPrevented) {
                            setIsOpen(false);
                        }
                    }
                },
            })}
            data-selected={isActive ? 'selected' : ''}
            data-slot='dropdown-item'
        >
            {children}
        </div>
    );
}
