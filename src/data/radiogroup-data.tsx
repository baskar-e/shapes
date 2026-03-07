export const radioGroupPropsData = [
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">name</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">-</span>,
        default: '-',
        description: "The name of the radio group, used to group items together for form submission."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">value</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">string</span>,
        default: '-',
        description: "The currently selected value of the radio group."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">defaultValue</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">string</span>,
        default: '-',
        description: "The default selected value when the radio group is initially rendered."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">onValueChange</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">{"(value: string) => void"}</span>,
        default: '-',
        description: "A callback function that is called whenever the selected value changes. It is used to update the value prop in a controlled component."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">orientation</span>,
        type: (
            <div className="flex flex-wrap gap-1">
                <span className="bg-gray-100 px-2 py-1 rounded-md">"horizontal"</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md">"vertical"</span>
            </div>
        ),
        default: 'horizontal',
        description: "Sets the visual layout of the radio items."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">disabled</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">boolean</span>,
        default: 'false',
        description: "A boolean flag that, prevents user interaction with all radio items within the group."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">required</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">boolean</span>,
        default: 'false',
        description: "Indicates that the user must select an option before submitting the form."
    }
]

export const radioItemPropsData = [
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">id</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">-</span>,
        default: '-',
        description: "A unique identifier for the radio item, used to link the input with its label for accessibility."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">value</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">-</span>,
        default: '-',
        description: "The unique string value associated with this specific radio item, used by the parent group to manage selection."
    },
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">children</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">ReactNode</span>,
        default: '-',
        description: "Content or elements rendered inside the component."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">disabled</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">boolean</span>,
        default: 'false',
        description: "A boolean flag that, prevents user interaction with this specific radio item."
    }
]

export const radioGroupAttribute = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-orientation</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"horizontal" | "vertical"</span>,
        description: "Indicates the orientation of the radio group."
    }
]

export const radioItemAttribute = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-state</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">"checked" | "unchecked"</span>,
        description: "Indicates whether the radio item is checked or unchecked."
    }
]