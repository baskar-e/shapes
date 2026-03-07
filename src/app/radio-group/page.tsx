'use client'

import { CodeBlock } from "@/components/codeBlock"
import { TabButton, TabList, TabPanel, Tabs } from "../../controls/tabs"
import { PropsTable } from "@/components/propsTable"
import { checkboxBasic, checkboxCode, checkboxDisabled, checkboxLabel, checkboxPropsData, checkboxUsage } from "@/data/checkbox-data"
import { RadioGroup, RadioItem } from "@/controls/radio-group"
import { useState } from "react"
import { AttributeTable } from "@/components/attributeTable"
import { radioGroupAttribute, radioGroupPropsData, radioItemAttribute, radioItemPropsData } from "@/data/radiogroup-data"

export default function RadioGroupPage() {
    const items = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];
    const [value, setValue] = useState('');

    return (
        <div className="grid gap-8 max-w-160 lg:max-w-180 2xl:max-w-200 py-4 xl:py-6 mx-auto" >
            <div className="grid gap-3">
                <h3 className="text-2xl xl:text-3xl font-medium">Radio Group</h3>
                <p className="max-xl:text-[15px]">
                    Radio component are used to select a single option from a set of choices. They are typically used in forms and lists to allow users to make a selection from mutually exclusive options.
                    </p>
            </div>
            <div className="grid gap-5">
                <h4 className="text-xl xl:text-2xl font-medium">Usage</h4>
                <CodeBlock
                    title="Imports"
                    data={checkboxCode}
                />
                <CodeBlock
                    title="Components"
                    data={checkboxUsage}
                />
            </div>
            <div className="grid gap-3">
                <h4 className="text-xl xl:text-2xl font-medium pb-2">Examples</h4>
                <h5 className="text-lg xl:text-xl font-medium pb-1">Basic</h5>
                <p className="text-sm">
                    A default radio group with multiple options. Use the <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">{'<RadioGroup />'}</code> component to create a basic set of selectable radio items. 
                </p>
                <Tabs defaultValue={'preview'} variant="line">
                    <TabList>
                        <TabButton value="preview">Preview</TabButton>
                        <TabButton value="code">Code</TabButton>
                    </TabList>
                    <TabPanel value="preview" className="flex items-center justify-center px-12 min-h-77">
                        <RadioGroup>
                            {items.map((item) => (
                                <RadioItem key={item.value} value={item.value}>
                                    {item.label}
                                </RadioItem>
                            ))}
                        </RadioGroup>
                    </TabPanel>
                    <TabPanel value="code" className="p-0">
                        <CodeBlock
                            data={checkboxBasic}
                        />
                    </TabPanel>
                </Tabs>
            </div>
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium pb-1">Orientation</h5>
                <p className="text-sm">
                    Use the <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">orientation</code> prop to arrange the radio items in either a horizontal or vertical layout.
                </p>
                <Tabs defaultValue={'preview'} variant="line">
                    <TabList>
                        <TabButton value="preview">Preview</TabButton>
                        <TabButton value="code">Code</TabButton>
                    </TabList>
                    <TabPanel value="preview" className="flex items-center justify-center px-42 py-9 min-h-77">
                        <RadioGroup orientation="vertical">
                            {items.map((item) => (
                                <RadioItem key={item.value} value={item.value}>
                                    {item.label}
                                </RadioItem>
                            ))}
                        </RadioGroup>
                    </TabPanel>
                    <TabPanel value="code" className="p-0">
                        <CodeBlock
                            data={checkboxLabel}
                        />
                    </TabPanel>
                </Tabs>
            </div>
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium pb-1">Default Value</h5>
                <p className="text-sm">
                    Use the <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">defaultValue</code> prop to set the initially selected radio item when the component is first rendered.
                </p>
                <Tabs defaultValue={'preview'} variant="line">
                    <TabList>
                        <TabButton value="preview">Preview</TabButton>
                        <TabButton value="code">Code</TabButton>
                    </TabList>
                    <TabPanel value="preview" className="flex items-center justify-center px-42 py-9 min-h-77">
                        <RadioGroup defaultValue="option1">
                            {items.map((item) => (
                                <RadioItem key={item.value} value={item.value}>
                                    {item.label}
                                </RadioItem>
                            ))}
                        </RadioGroup>
                    </TabPanel>
                    <TabPanel value="code" className="p-0">
                        <CodeBlock
                            data={checkboxLabel}
                        />
                    </TabPanel>
                </Tabs>
            </div>
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium pb-1">Controlled</h5>
                <p className="text-sm">
                    Use the <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">value</code> and <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">onValueChange</code> props to programmatically manage the selection state of the radio group.
                </p>
                <Tabs defaultValue={'preview'} variant="line">
                    <TabList>
                        <TabButton value="preview">Preview</TabButton>
                        <TabButton value="code">Code</TabButton>
                    </TabList>
                    <TabPanel value="preview" className="flex items-center justify-center px-42 py-9 min-h-77">
                        <RadioGroup value={value} onValueChange={e=>setValue(e)}>
                            {items.map((item) => (
                                <RadioItem key={item.value} value={item.value}>
                                    {item.label}
                                </RadioItem>
                            ))}
                        </RadioGroup>
                    </TabPanel>
                    <TabPanel value="code" className="p-0">
                        <CodeBlock
                            data={checkboxLabel}
                        />
                    </TabPanel>
                </Tabs>
            </div>
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium pb-1">Disabled</h5>
                <p className="text-sm">
                    Use the <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">disabled</code> prop in <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">{"<RadioGroup />"}</code> to prevent interaction with the entire radio group.
                </p>
                <Tabs defaultValue={'preview'} variant="line">
                    <TabList>
                        <TabButton value="preview">Preview</TabButton>
                        <TabButton value="code">Code</TabButton>
                    </TabList>
                    <TabPanel value="preview" className="flex items-center justify-center px-42 py-9 min-h-77">
                        <RadioGroup>
                            {items.map((item) => (
                                <RadioItem key={item.value} value={item.value} disabled={item.value === 'option2'}>
                                    {item.label}
                                </RadioItem>
                            ))}
                        </RadioGroup>
                    </TabPanel>
                    <TabPanel value="code" className="p-0">
                        <CodeBlock
                            data={checkboxDisabled}
                        />
                    </TabPanel>
                </Tabs>
                <p className="text-sm pt-5">
                    Use the <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">disabled</code> prop in <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">{"<RadioItem />"}</code> to prevent interaction with the radio item.
                </p>
                <Tabs defaultValue={'preview'} variant="line">
                    <TabList>
                        <TabButton value="preview">Preview</TabButton>
                        <TabButton value="code">Code</TabButton>
                    </TabList>
                    <TabPanel value="preview" className="flex items-center justify-center px-42 py-9 min-h-77">
                        <RadioGroup>
                            {items.map((item) => (
                                <RadioItem key={item.value} value={item.value} disabled={item.value === 'option2'}>
                                    {item.label}
                                </RadioItem>
                            ))}
                        </RadioGroup>
                    </TabPanel>
                    <TabPanel value="code" className="p-0">
                        <CodeBlock
                            data={checkboxDisabled}
                        />
                    </TabPanel>
                </Tabs>
            </div>

            {/* Component API */}
            <div className="grid gap-3">
                <h4 className="text-xl xl:text-2xl font-medium pb-2">Component API</h4>
                <h5 className="text-lg xl:text-xl font-medium">RadioGroup</h5>
                <p className="text-sm pb-1">
                    The <span className="text-[13px] rounded-sm px-1.5 py-0.5 bg-gray-200">RadioGroup</span> component is a control that allows users to select one option from a set of radio items.
                </p>
                <PropsTable data={radioGroupPropsData} className="mb-5" />
                <AttributeTable data={radioGroupAttribute} />
            </div>
             <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium">RadioItem</h5>
                <p className="text-sm pb-1">
                    The <span className="text-[13px] rounded-sm px-1.5 py-0.5 bg-gray-200">RadioItem</span> component represents an individual option within a <span className="text-[13px] rounded-sm px-1.5 py-0.5 bg-gray-200">RadioGroup</span>.
                </p>
                <PropsTable data={radioItemPropsData} className="mb-5" />
                <AttributeTable data={radioItemAttribute} />
            </div>
        </div>
    )
}