import { classNameProps } from "./className-data"

export const inputGroupPropsData = [
    {
        ...classNameProps,
        description: "Custom CSS class name for styling the input group component."
    }
]

export const inputGroupAddonPropsData = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">align</span>,
        type: (
            <div className="flex flex-wrap gap-1">
                <span className="bg-gray-100 px-2 py-1 rounded-md">"inline-start"</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md">"inline-end"</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md">"block-start"</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md">"block-end"</span>
            </div>
        ),
        default: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"horizontal"</span>,
        description: "A prop used to specify the alignment of an element relative to its container."
    },
    {
        ...classNameProps,
        description: "Custom CSS class name for styling the input group component."
    }
]

export const inputGroupAddonAttribute = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-align</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"inline-start" | "inline-end" | "block-start" | "block-end"</span>,
        description: "A data attribute that reflects the alignment value of the element."
    }
]

export const inputGroupInputPropsData = [
    {
        ...classNameProps,
        description: "Custom CSS class name for styling the input group input component."
    }
]