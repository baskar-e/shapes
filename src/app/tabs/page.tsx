import { CodeBlock } from "@/components/codeBlock"
import { TabButton, TabHighlight, TabList, TabPanel, Tabs } from "../../controls/tabs"
import { PropsTable } from "@/components/propsTable"
import { AttributeTable } from "@/components/attributeTable"
import { accordionBasic, accordionCode, accordionItemAttribute, accordionItemPropsData, accordionMultiple, accordionPropsData, accordionUsage } from "@/data/accordion-data"
import { tabButtonAttribute, tabButtonPropsData, tabHighlightPropsData, tabListAttribute, tabPanelPropsData, tabsAttribute, tabsPropsData } from "@/data/tabs-data"

export default function TabsPage() {
    return (
        <div className="grid gap-8 max-w-160 lg:max-w-180 2xl:max-w-200 py-4 xl:py-6 mx-auto" >
            <div className="grid gap-3">
                <h3 className="text-2xl xl:text-3xl font-medium">Tabs</h3>
                <p className="max-xl:text-[15px]">The Tabs component provides a container for organizing content into separate panels, allowing users to toggle between different sections by clicking on tab buttons.</p>
            </div>
            <div className="grid gap-5">
                <h4 className="text-xl xl:text-2xl font-medium">Usage</h4>
                <CodeBlock
                    title="Imports"
                    data={accordionCode}
                />
                <CodeBlock
                    title="Components"
                    data={accordionUsage}
                />
            </div>
            <div className="grid gap-3">
                <h4 className="text-xl xl:text-2xl font-medium pb-2">Examples</h4>
                <h5 className="text-lg xl:text-xl font-medium pb-1">Basic</h5>
                <p className="text-sm">A basic <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">{'<Tabs />'}</code> component to toggle between different panels within the same context.</p>
                <Tabs defaultValue={'preview'} variant="line">
                    <TabList>
                        <TabButton value="preview">Preview</TabButton>
                        <TabButton value="code">Code</TabButton>
                    </TabList>
                    <TabPanel value="preview" className="flex items-center px-22 min-h-77 bg-[#edf0f3]">
                        <Tabs defaultValue={'home'}>
                            <TabList>
                                <TabButton value="home">Home</TabButton>
                                <TabButton value="profile">Profile</TabButton>
                                <TabButton value="settings">Settings</TabButton>
                            </TabList>
                            <TabPanel value="home" className="">
                                <p>Access your personalized dashboard, recent activity, and a high-level overview of your current projects.</p>
                            </TabPanel>
                            <TabPanel value="profile">
                                <p>View and edit your personal information, manage your public bio, and update your account display settings.</p>
                            </TabPanel>
                            <TabPanel value="settings">
                                <p>Configure your application preferences, security options, and notification behaviors to suit your workflow.</p>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel value="code" className="p-0">
                        <CodeBlock
                            data={accordionBasic}
                        />
                    </TabPanel>
                </Tabs>
            </div>
            {/* Variant */}
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium pb-1">Variant</h5>
                <p className="text-sm">
                    Use the <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">variant="line"</code> prop to change the visual style of the tab triggers. The default style is <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">pill</code>.
                </p>
                <Tabs defaultValue={'preview'} variant="line">
                    <TabList>
                        <TabButton value="preview">Preview</TabButton>
                        <TabButton value="code">Code</TabButton>
                    </TabList>
                    <TabPanel value="preview" className="flex items-center px-12 min-h-77 bg-[#edf0f3]">
                        <Tabs defaultValue={'home'} variant="line">
                            <TabList>
                                <TabButton value="home">Home</TabButton>
                                <TabButton value="profile">Profile</TabButton>
                                <TabButton value="settings">Settings</TabButton>
                            </TabList>
                            <TabPanel value="home" className="">
                                <p>Access your personalized dashboard, recent activity, and a high-level overview of your current projects.</p>
                            </TabPanel>
                            <TabPanel value="profile">
                                <p>View and edit your personal information, manage your public bio, and update your account display settings.</p>
                            </TabPanel>
                            <TabPanel value="settings">
                                <p>Configure your application preferences, security options, and notification behaviors to suit your workflow.</p>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel value="code" className="p-0">
                        <CodeBlock
                            data={accordionMultiple}
                        />
                    </TabPanel>
                </Tabs>
            </div>
            {/* Orientation */}
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium pb-1">Orientation</h5>
                <p className="text-sm">
                    Use the <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">orientation</code> prop to arrange the tab list in either a horizontal or vertical layout.
                </p>
                <Tabs defaultValue={'preview'} variant="line">
                    <TabList>
                        <TabButton value="preview">Preview</TabButton>
                        <TabButton value="code">Code</TabButton>
                    </TabList>
                    <TabPanel value="preview" className="flex items-center px-12 min-h-77 bg-[#edf0f3]">
                        <Tabs defaultValue={'home'} orientation="vertical">
                            <TabList>
                                <TabButton value="home">Home</TabButton>
                                <TabButton value="profile">Profile</TabButton>
                                <TabButton value="settings">Settings</TabButton>
                            </TabList>
                            <TabPanel value="home" className="">
                                <p>Access your personalized dashboard, recent activity, and a high-level overview of your current projects.</p>
                            </TabPanel>
                            <TabPanel value="profile">
                                <p>View and edit your personal information, manage your public bio, and update your account display settings.</p>
                            </TabPanel>
                            <TabPanel value="settings">
                                <p>Configure your application preferences, security options, and notification behaviors to suit your workflow.</p>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel value="code" className="p-0">
                        <CodeBlock
                            data={accordionMultiple}
                        />
                    </TabPanel>
                </Tabs>
            </div>
            {/* Highlight */}
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium pb-1">Custom Highlight</h5>
                <p className="text-sm">
                    Use the <code className="rounded-sm px-1.5 py-0.5 bg-gray-200">{'<TabHighlight />'}</code> component allows you to customize the appearance of tab buttons by applying styles like background colors, borders, and shadows.
                </p>
                <Tabs defaultValue={'preview'} variant="line">
                    <TabList>
                        <TabButton value="preview">Preview</TabButton>
                        <TabButton value="code">Code</TabButton>
                    </TabList>
                    <TabPanel value="preview" className="flex items-center px-12 min-h-77 bg-[#edf0f3]">
                        <Tabs defaultValue={'home'}>
                            <TabList>
                                <TabHighlight className="rounded-xl bg-gray-200 shadow-md">
                                    <TabButton value="home">Home</TabButton>
                                    <TabButton value="profile">Profile</TabButton>
                                    <TabButton value="settings">Settings</TabButton>
                                </TabHighlight>
                            </TabList>
                            <TabPanel value="home" className="">
                                <p>Access your personalized dashboard, recent activity, and a high-level overview of your current projects.</p>
                            </TabPanel>
                            <TabPanel value="profile">
                                <p>View and edit your personal information, manage your public bio, and update your account display settings.</p>
                            </TabPanel>
                            <TabPanel value="settings">
                                <p>Configure your application preferences, security options, and notification behaviors to suit your workflow.</p>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel value="code" className="p-0">
                        <CodeBlock
                            data={accordionMultiple}
                        />
                    </TabPanel>
                </Tabs>
            </div>
            {/* Component API */}
            <div className="grid gap-3">
                <h4 className="text-xl xl:text-2xl font-medium pb-2">Component API</h4>
                <h5 className="text-lg xl:text-xl font-medium">Tabs</h5>
                <p className="text-sm pb-1">
                    
                </p>
                <PropsTable data={tabsPropsData} className="mb-5" />
                <AttributeTable data={tabsAttribute} />
            </div>
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium">TabButton</h5>
                <p className="text-sm pb-1">
                    
                </p>
                <PropsTable data={tabButtonPropsData} className="mb-5" />
                <AttributeTable data={tabButtonAttribute} />
            </div>
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium">TabHightlight</h5>
                <p className="text-sm pb-1">
                    
                </p>
                <PropsTable data={tabHighlightPropsData} />
            </div>
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium">TabList</h5>
                <p className="text-sm pb-1">
                    
                </p>
                <AttributeTable data={tabListAttribute} />
            </div>
            <div className="grid gap-3">
                <h5 className="text-lg xl:text-xl font-medium">TabPanel</h5>
                <p className="text-sm pb-1">
                    
                </p>
                <PropsTable data={tabPanelPropsData} className="mb-5" />
                <AttributeTable data={tabsAttribute} />
            </div>
        </div>
    )
}

