export const dropdownItems = [
    {
        id: 1,
        value: "Add",
    },
    {
        id: 2,
        value: "Edit",
    },
    {
        id: 3,
        value: "Change",
    },
    {
        id: 4,
        value: "Option",
    },
    {
        id: 5,
        value: "Delete",
    },
]

export const dropdownPropsData = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">open</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">boolean</span>,
        default: 'false',
        description: "Controls whether the combobox dropdown is open."
    },
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">onOpen</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">{"(open: boolean) => void"}</span>,
        default: '-',
        description: "Callback function fired when the combobox open state is changed."
    },
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">align</span>,
        type: (
            <div className="flex flex-wrap gap-1">
                <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"start"</span>
                <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"center"</span>
                <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"end"</span>
            </div>
        ),
        default: 'center',
        description: "The preferred alignment against the trigger which the component will be positioned."
    },
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">side</span>,
        type: (
            <div className="flex flex-wrap gap-1">
                <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"top"</span>
                <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"bottom"</span>
                <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"left"</span>
                <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"right"</span>
            </div>
        ),
        default: 'bottom',
        description: "The preferred edge of the trigger against which the component will be positioned."
    },
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">space</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">number</span>,
        default: '5',
        description: "The space between the combobox input and the dropdown."
    }
];

export const dropdownButtonAttribute = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-state</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">"open" | "closed"</span>,
        description: "Indicates whether the dropdown menu is opened or closed."
    }
]

export const dropdownContentPropsData = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">portal</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">{"RefObject<HTMLElement | null>"}</span>,
        default: 'document.body',
        description: "Specify a container element to render the content into via a portal."
    },
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">modal</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">boolean</span>,
        default: 'false',
        description: "The property that determines whether the component should prevent interaction with the background while open."
    }
]

export const dropdownContentAttribute = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-state</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">"open" | "closed"</span>,
        description: "Indicates whether the dropdown menu is opened or closed."
    },
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-align</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">"start" | "center" | "end"</span>,
        description: "Indicates the alignment of the dropdown content relative to its trigger."
    },
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-side</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">"top" | "bottom" | "left" | "right"</span>,
        description: "The attribute specifies the side on which the dropdown content is positioned relative to the trigger."
    },
]

export const dropdownItemPropsData = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">onSelect</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">{"(e: Event) => void"}</span>,
        default: '-',
        description: "Event handler triggered when an item is selected. Calling event.preventDefault prevents the dropdown from closing."
    }
]

export const dropdownItemAttribute = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-selected</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">"selected"</span>,
        description: "Indicates whether the item is currently selected."
    }
]