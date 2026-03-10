import { t } from "@/components/codeBlock";
import { classNameProps } from "./className-data"

export const tabsPropsData = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">orientation</span>,
        type: (
            <div className="flex flex-wrap gap-1">
                <span className="bg-gray-100 px-2 py-1 rounded-md">"horizontal"</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md">"vertical"</span>
            </div>
        ),
        default: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"horizontal"</span>,
        description: "Specifies the layout direction of the tab component."
    },
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">variant</span>,
        type: (
            <div className="flex flex-wrap gap-1">
                <span className="bg-gray-100 px-2 py-1 rounded-md">"pill"</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md">"line"</span>
            </div>
        ),
        default: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"pill"</span>,
        description: "Defines the visual style of the tab triggers."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">defaultValue</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">string</span>,
        default: '-',
        description: "Sets the initially active tab when the component is rendered, determining which tab is visible by default."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">value</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">string</span>,
        default: '-',
        description: " The current active tab value, used when you need to manage the tab state programmatically."
    },
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">onValueChange</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">{"(value: string) => void"}</span>,
        default: '-',
        description: "A callback function that gets triggered whenever the active tab changes."
    }
]

export const tabsAttribute = [
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">data-orientation</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">"horizontal" | "vertical"</span>,
        description: "Indicates the orientation of the tabs."
    }
]

export const tabButtonPropsData = [
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">value</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">string</span>,
        default: '-',
        description: "The value prop on the TabButton specifies the identifier for each tab, used to track and control the active tab."
    }
]

export const tabButtonAttribute = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-state</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">"active" | "inactive"</span>,
        description: "Indicates whether the tab button is currently active or not."
    }
]

export const tabHighlightPropsData = [
    {
        ...classNameProps,
        description: "Custom CSS class name for styling the tab indicator."
    }
]

export const tabListAttribute = [
    ...tabsAttribute,
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-variant</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"pill" | "line"</span>,
        description: "A data attribute that reflects the current visual style variant of the tab list."
    }
]

export const tabPanelPropsData = [
    {
        name: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">value</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">string</span>,
        default: '-',
        description: "The value prop on TabPanel links the panel to its corresponding tab, controlling which panel is displayed."
    }
]

export const tabPanelAttribute = [
    ...tabsAttribute,
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-state</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">"active" | "inactive"</span>,
        description: "Indicates whether the tab panel is currently active or not."
    }
]