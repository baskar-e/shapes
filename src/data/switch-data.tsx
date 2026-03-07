export const switchPropsData = [
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">value</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">string</span>,
        default: '-',
        description: "The current state of the switch, either on or off. It is used to control the switch's selected state in a controlled component."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">onValueChange</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">{"(value: string) => void"}</span>,
        default: '-',
        description: "A callback function that is triggered when the switch's state changes. It is used to update the value prop in a controlled component."
    }
]

export const switchAttribute = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-state</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">"checked" | "unchecked"</span>,
        description: "A data attribute that indicates the current state of the switch."
    }
]