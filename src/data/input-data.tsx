import { classNameProps } from "./className-data"

export const inputPropsData = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">value</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">string</span>,
        default: '""',
        description: "The controlled input value of the input."
    },
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">onChange</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">{"(value: string) => void"}</span>,
        default: '-',
        description: "Event handler called when the input value changes."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">disabled</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">boolean</span>,
        default: 'false',
        description: "Whether the input is disabled."
    },
    {
        ...classNameProps,
        description: "Custom CSS class name for styling the input component."
    }
]
