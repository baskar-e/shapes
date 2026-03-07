import { ComponentProps, createContext, ReactNode, Ref, RefObject, useContext, useId, useRef, useState } from 'react';
import { createSafeContext } from '@/lib/context';
import {
    useFloating, useInteractions, useClick, useDismiss, useRole,
    FloatingPortal, FloatingOverlay, FloatingFocusManager,
    OffsetOptions,
    autoUpdate,
    offset,
    flip,
    shift,
    OpenChangeReason,
    useMergeRefs,
    FloatingContext
} from '@floating-ui/react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Button } from './button';

interface DialogContextType {
    isOpen: boolean;
    labelId: string;
    descriptionId: string;
    refs: ReturnType<typeof useFloating>['refs'];
    context: FloatingContext;
    setIsOpen: (open: boolean, event?: Event, reason?: OpenChangeReason) => void;
    getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
    getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
}

type DialogProps = {
    children: ReactNode
    space?: OffsetOptions
    open?: boolean
    onOpen?: (open: boolean, event?: Event, reason?: OpenChangeReason) => void
}

type DialogContentProps = {
    showCloseButton?: boolean
} & ComponentProps<'div'>

type DialogOverlayProps = {
    portal?: RefObject<HTMLElement | null>
} & ComponentProps<typeof FloatingOverlay>

const [DialogProvider, useDialogContext] = createSafeContext<DialogContextType>('Dialog');
const DialogOverlayProvider = createContext<{ isOverlay: boolean } | undefined>(undefined);

export function Dialog({ open, onOpen, children }: DialogProps) {
    const labelId = useId();
    const descriptionId = useId();

    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = open ?? internalOpen;
    const setIsOpen = onOpen ?? setInternalOpen;

    const { refs, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        // middleware: [offset(), flip(), shift({ padding: 5 })],
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: 'dialog' });

    const { getFloatingProps, getReferenceProps } = useInteractions([click, dismiss, role]);

    return (
        <DialogProvider value={{ isOpen, refs, labelId, descriptionId, context, setIsOpen, getFloatingProps, getReferenceProps }}>
            {children}
        </DialogProvider>
    );
}

export function DialogContent({ children, className, showCloseButton = true, ...props }: DialogContentProps) {
    const { refs, isOpen, labelId, descriptionId, context, getFloatingProps } = useDialogContext();
    const overlayCtx = useContext(DialogOverlayProvider);
    const isInsideOverlay = !!overlayCtx?.isOverlay;

    if (!isOpen) return null;

    const content = (
        <FloatingFocusManager context={context}>
            <div
                ref={refs.setFloating}
                aria-labelledby={labelId}
                aria-describedby={descriptionId}
                {...getFloatingProps(props)}
                className={cn("relative flex flex-col gap-y-4 bg-white text-ash text-sm p-5 rounded-xl shadow-2xl max-w-md w-full outline-none animate-in zoom-in-95 fade-in duration-200", className)}
            >
                {children}
                {showCloseButton && <DialogClose className='absolute right-3 top-3'><X className='size-4' /></DialogClose>}
            </div>
        </FloatingFocusManager>
    )

    return isInsideOverlay ? content : <DialogOverlay>{content}</DialogOverlay>
}

export function DialogOverlay({ children, className, portal, ...props }: DialogOverlayProps) {
    const { isOpen } = useDialogContext();

    if (!isOpen) return null;

    return (
        <DialogOverlayProvider value={{ isOverlay: true }}>
            <FloatingPortal root={portal}>
                <FloatingOverlay
                    className={cn("flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-300", className)}
                    lockScroll
                    {...props}
                >
                    {children}
                </FloatingOverlay>
            </FloatingPortal>
        </DialogOverlayProvider>
    )
}

export function DialogButton<T extends HTMLButtonElement>({ ref: externalRef, children, className, ...props }: ComponentProps<"button"> & { ref?: Ref<T> }) {
    const { isOpen, refs, getReferenceProps } = useDialogContext();
    const mergedRef = useMergeRefs([refs.setReference, externalRef]);

    return (
        <Button
            ref={mergedRef as Ref<HTMLButtonElement>}
            variant='outline'
            {...getReferenceProps(props)}
            data-state={isOpen ? 'open' : 'closed'}
            className={className}
        >
            {children}
        </Button>
    );
}

export function DialogHeader({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            className={cn("flex flex-col gap-y-1.5 text-ash text-center sm:text-left pb-2 border-b border-border", className)}
            {...props}
        />
    )
}

export function DialogTitle({ className, ...props }: ComponentProps<"h2">) {
    const { labelId } = useDialogContext();

    return (
        <h2
            {...props}
            id={labelId}
            className={cn("font-semibold text-base leading-none tracking-tight", className)}
        />
    );
}

export function DialogDescription({ className, ...props }: ComponentProps<"p">) {
    const { descriptionId } = useDialogContext();

    return (
        <p
            {...props}
            id={descriptionId}
            className={cn("text-sm text-slate-500", className)}
        />
    );
}

export function DialogClose({ className, children, ...props }: ComponentProps<"button">) {
    const { setIsOpen } = useDialogContext();

    return (
        <button
            type="button"
            aria-label='close'
            onClick={() => setIsOpen(false)}
            className={cn("px-1.5 py-0.5 rounded-lg transition-colors hover:bg-slate-100 outline-none", className)}
            {...props}
        >
            {children}
            <span className="sr-only">Close</span>
        </button>
    );
}

export function DialogFooter({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            className={cn("flex justify-end gap-2 text-ash pt-4 border-t border-border", className)}
            {...props}
        />
    )
}
