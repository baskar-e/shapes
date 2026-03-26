export interface SubComponentProps {
  component: string;
  description?: string;
  props: Record<string, string>;
}

export interface ComponentEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  codeSnippet?: string;
  subComponents?: SubComponentProps[];
  href: string;
}

export const COMPONENTS: ComponentEntry[] = [

  // ─── Layout ───────────────────────────────────────────────────────────────

  {
    id: "accordion",
    name: "Accordion",
    category: "Layout",
    description: "Vertically stacked sections that expand and collapse. Useful for FAQs, settings panels, and progressive disclosure.",
    tags: ["expand", "collapse", "faq", "disclosure", "toggle", "panel", "collapsible"],
    codeSnippet: `<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. Follows the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Can it be animated?</AccordionTrigger>
    <AccordionContent>Yes, using CSS transitions on height.</AccordionContent>
  </AccordionItem>
</Accordion>`,
    subComponents: [
      {
        component: "Accordion",
        description: "Root container — manages which item(s) are open.",
        props: {
          value: 'string | string[] — controlled open item(s). String when type="single", string[] when type="multiple".',
          defaultValue: "string | string[] — uncontrolled initial open item(s).",
          onValueChange: "(value: string | string[]) => void — fires when open state changes.",
          type: '"single" | "multiple" — single allows one item open at a time, multiple allows many.',
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "AccordionItem",
        description: "A single collapsible section. Direct child of Accordion.",
        props: {
          value: "string — unique ID for this item. Used by Accordion to track open state. Required. Must be unique among siblings.",
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "AccordionTrigger",
        description: "Clickable header that toggles the item.",
        props: {
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "AccordionContent",
        description: "Collapsible body shown when item is open.",
        props: {
          className: "string - additional CSS classes for styling.",
        },
      },
    ],
    href: "/components/accordion",
  },

  // ─── Navigation ───────────────────────────────────────────────────────────

  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    category: "Navigation",
    description: "Hierarchical navigation trail showing the user's current location. Renders an ordered list of links separated by dividers.",
    tags: ["navigation", "path", "location", "trail", "hierarchy", "links", "wayfinding"],
    codeSnippet: `<Breadcrumbs>
  <BreadcrumbsItem>
    <BreadcrumbsLink href="/">Home</BreadcrumbsLink>
  </BreadcrumbsItem>
  <BreadcrumbsItem>
    <BreadcrumbsLink href="/components">Components</BreadcrumbsLink>
  </BreadcrumbsItem>
  <BreadcrumbsItem>
    <BreadcrumbsPage>Breadcrumbs</BreadcrumbsPage>
  </BreadcrumbsItem>
</Breadcrumbs>`,
    subComponents: [
      {
        component: "Breadcrumbs",
        description: "Root nav wrapper.",
        props: {
          separator: 'ReactNode — custom separator between items. Defaults to ">".',
          className: "string - additional CSS classes for styling.",
          "aria-label": 'string — accessible label. Defaults to "Breadcrumbs".',
        },
      },
      {
        component: "BreadcrumbsItem",
        description: "A wrapper for breadcrumbs - link, page, ellipsis and separartor.",
        props: {
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "BreadcrumbsLink",
        description: "An interactive link representing a previous page in the hierarchy.",
        props: {
          href: "A string defining the URL or path to navigate to.",
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "BreadcrumbsPage",
        description: "The current active page, typically rendered as non-clickable text.",
        props: {
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "BreadcrumbsEllipsis",
        description: "Indicates collapsed or hidden steps in a long navigation trail.",
        props: {
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "BreadcrumbsSeparator",
        description: "Visual separator displayed between breadcrumb items",
        props: {
          className: "string - additional CSS classes for styling.",
        },
      },
    ],
    href: "/breadcrumbs",
  },

  {
    id: "tabs",
    name: "Tabs",
    category: "Navigation",
    description: "Organises content into multiple panels accessible via a tabbed interface. Only one panel visible at a time. Supports keyboard navigation.",
    tags: ["tab", "panel", "switch", "navigation", "sections", "content", "active"],
    codeSnippet: `<Tabs defaultValue="account">
  <TabList>
    <TabButton value="account">Account</TabButton>
    <TabButton value="password">Password</TabButton>
  </TabList>
  <TabPanel value="account">Account settings.</TabPanel>
  <TabPanel value="password">Change your password.</TabPanel>
</Tabs>`,
    subComponents: [
      {
        component: "Tabs",
        description: "Root container — manages active tab state.",
        props: {
          value: "string — controlled active tab key.",
          defaultValue: "string — uncontrolled initial active tab.",
          onValueChange: "(value: string) => void — fires when active tab changes.",
          orientation: '"horizontal" | "vertical" — layout direction. Default horizontal.',
          variant: '"pill" | "line" - defines the visual style, either a rounded capsule or a simple underlined text.',
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "TabList",
        description: "Container for the tab trigger buttons.",
        props: {
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "TabButton",
        description: "Clickable tab button. Activates the matching TabsContent.",
        props: {
          value: "string — must match the value of the TabsContent it controls. Required.",
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "TabPanel",
        description: "Panel shown when its matching trigger is active.",
        props: {
          value: "string — must match the value of the TabsTrigger that controls it. Required.",
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "TabHighlight",
        description: "A decorative element used to style and highlight the active tab.",
        props: {
          className: "string - additional CSS classes for styling.",
        },
      },
    ],
    href: "/tabs",
  },

  // ─── Inputs ───────────────────────────────────────────────────────────────

  {
    id: "button",
    name: "Button",
    category: "Inputs",
    description: "Triggers an action or event. Supports variants, sizes, loading state, disabled state, and leading/trailing icons.",
    tags: ["click", "action", "submit", "cta", "primary", "secondary", "loading", "icon", "danger"],
    codeSnippet: `<Button variant="primary" size="md" onClick={handleSave}>
  Save changes
</Button>
<Button variant="outline" loading={isSaving}>
  <UploadIcon /> Export
</Button>
<Button variant="ghost" disabled>Delete</Button>`,
    subComponents: [
      {
        component: "Button",
        props: {
          variant: '"primary" | "secondary" | "outline" | "ghost" | "white"',
          size: '"xs" | "sm" | "md" | "lg"',
          loading: "boolean — shows a spinner and disables interaction.",
          disabled: "boolean",
          type: '"button" | "submit" | "reset"',
          onClick: "(e: React.MouseEvent) => void",
          className: "string - additional CSS classes for styling.",
        },
      },
    ],
    href: "/components/button",
  },

  {
    id: "button-group",
    name: "Button Group",
    category: "Inputs",
    description: "Groups related buttons together, merging borders for a fused appearance. Ideal for toolbars, segmented controls, and pagination.",
    tags: ["group", "toolbar", "segmented", "button", "cluster", "joined", "actions"],
    codeSnippet: `<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>`,
    subComponents: [
      {
        component: "ButtonGroup",
        description: "Wrapper that fuses child Button borders.",
        props: {
          orientation: '"horizontal" | "vertical" — default horizontal.',
          className: "string - additional CSS classes for styling.",
        },
      },
    ],
    href: "/button-group",
  },

  {
    id: "checkbox",
    name: "Checkbox",
    category: "Inputs",
    description: "Binary toggle for boolean form values. Supports indeterminate state for select-all patterns.",
    tags: ["check", "toggle", "boolean", "select", "form", "tick", "indeterminate", "multiple"],
    codeSnippet: `<Checkbox
  label="I agree to the terms"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
/>
<Checkbox
  label="Select all"
  checked={allSelected}
  onChange={handleSelectAll}
/>`,
    subComponents: [
      {
        component: "Checkbox",
        props: {
          checked: "boolean — controlled checked state.",
          defaultChecked: "boolean — uncontrolled initial state.",
          onChange: "(e: React.ChangeEvent<HTMLInputElement>) => void",
          label: "string | ReactNode — visible label.",
          description: "string — shown below the label.",
          disabled: "boolean",
          required: "boolean",
          className: "string - additional CSS classes for styling.",
        },
      },
    ],
    href: "/checkbox",
  },

  {
    id: "combobox",
    name: "Combobox",
    category: "Inputs",
    description: "Searchable select combining a text field with a dropdown. Supports async loading, multi-select, and creatable options.",
    tags: ["search", "select", "autocomplete", "typeahead", "filter", "async", "multi", "dropdown", "creatable"],
    codeSnippet: `<Combobox items={frameworks} labelKey="name" valueKey="id">
  <ComboboxInput value={value} onChange={setValue} placeholder="Search frameworks..." />
  <ComboboxContent>
    <ComboboxEmpty />
    <ComboboxList>
      <ComboboxItem value="react">React</ComboboxItem>
      <ComboboxItem value="next">Next</ComboboxItem>
      <ComboboxItem value="angular">Angular</ComboboxItem>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,
    subComponents: [
      {
        component: "Combobox",
        props: {
          items: "Items[] — An array of data objects used as selectable options.",
          open: "boolean — Controlled state to handle the visibility of the menu.",
          onOpen: "(open: boolean) => void — Callback function triggered when the menu opens or closes.",
          autoHighlight: "boolean — If true, the first option is highlighted by default (Default: false).",
          align: "'start' | 'center' | 'end' — The alignment of the menu relative to the trigger (Default: 'center').",
          side: "'top' | 'right' | 'bottom' | 'left' — The preferred side for menu placement (Default: 'bottom').",
          space: "number — The pixel gap between the trigger and the menu (Default: 5).",
          labelKey: "string | ((item: T) => string) — The object key used to display text (Default: 'label').",
          valueKey: "string | ((item: T) => string) — The object key used for the unique value (Default: 'value').",
          disabledKey: "string | ((item: T) => boolean | undefined) — The object key used to identify disabled items (Default: 'disabled').",
        },
      },
    ],
    href: "/components/combobox",
  },

  {
    id: "input",
    name: "Input",
    category: "Inputs",
    description: "Single-line text input with label, helper text, error state, character count, and optional leading/trailing icons.",
    tags: ["text", "form", "field", "textfield", "email", "password", "search", "number"],
    codeSnippet: `<Input
  label="Email address"
  type="email"
  placeholder="you@example.com"
  helperText="We'll never share your email."
/>
<Input
  label="Username"
  error="Username is already taken"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>`,
    subComponents: [
      {
        component: "Input",
        props: {
          label: "string — visible label rendered above the input.",
          type: '"text" | "email" | "password" | "number" | "search" | "url" | "tel"',
          placeholder: "string",
          value: "string — controlled value.",
          onChange: "(e: React.ChangeEvent<HTMLInputElement>) => void",
          error: "string — error message shown below. Also applies red border styling.",
          helperText: "string — helper text shown below when there is no error.",
          leadingIcon: "ReactNode — icon inside the left edge.",
          trailingIcon: "ReactNode — icon inside the right edge.",
          disabled: "boolean",
          required: "boolean",
          maxLength: "number — enables character count display.",
          className: "string - additional CSS classes for styling.",
        },
      },
    ],
    href: "/components/input",
  },

  {
    id: "input-group",
    name: "Input Group",
    category: "Inputs",
    description: "Fuses an input with prefix/suffix addons or buttons into a single control. Used for URLs, phone numbers, unit inputs, and search-with-action.",
    tags: ["addon", "prefix", "suffix", "append", "prepend", "input", "group", "url", "unit"],
    codeSnippet: `<InputGroup>
  <InputAddon>https://</InputAddon>
  <Input placeholder="yoursite.com" />
</InputGroup>
<InputGroup>
  <InputAddon>$</InputAddon>
  <Input type="number" placeholder="0.00" />
  <InputAddon>USD</InputAddon>
</InputGroup>
<InputGroup>
  <Input placeholder="Enter invite code" />
  <Button variant="primary">Apply</Button>
</InputGroup>`,
    subComponents: [
      {
        component: "InputGroup",
        description: "Wrapper that fuses child borders into a single control.",
        props: {
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "InputAddon",
        description: "Non-interactive prefix or suffix label inside the group.",
        props: {
          className: "string - additional CSS classes for styling.",
          children: "ReactNode — text or icon shown in the addon.",
        },
      },
    ],
    href: "/components/input-group",
  },

  {
    id: "radio-group",
    name: "Radio Group",
    category: "Inputs",
    description: "Mutually exclusive radio buttons — only one option selectable at a time. Supports horizontal/vertical layouts and disabled options.",
    tags: ["radio", "select", "option", "choice", "mutually exclusive", "single select", "form"],
    codeSnippet: `<RadioGroup
  label="Notification preference"
  value={preference}
  onChange={setPreference}
>
  <RadioOption value="all">All notifications</RadioOption>
  <RadioOption value="mentions">Mentions only</RadioOption>
  <RadioOption value="none">None</RadioOption>
</RadioGroup>`,
    subComponents: [
      {
        component: "RadioGroup",
        description: "Root container — manages which option is selected.",
        props: {
          value: "string — controlled selected value.",
          defaultValue: "string — uncontrolled initial value.",
          onChange: "(value: string) => void",
          orientation: '"vertical" | "horizontal" — default vertical.',
          label: "string — group label shown above the options.",
          error: "string — error message shown below.",
          disabled: "boolean — disables all options.",
          name: "string — HTML name attribute for native form submission.",
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "RadioOption",
        description: "A single selectable radio item.",
        props: {
          value: "string — the value this option represents. Compared against RadioGroup value to determine if checked. Required.",
          disabled: "boolean — disables only this option.",
          className: "string - additional CSS classes for styling.",
          children: "ReactNode — label for this option.",
        },
      },
    ],
    href: "/components/radio-group",
  },

  {
    id: "switch",
    name: "Switch",
    category: "Inputs",
    description: "On/off toggle for immediate-effect settings. Prefer Switch over Checkbox when the change applies instantly without a form submit.",
    tags: ["toggle", "on", "off", "boolean", "enable", "disable", "settings", "preference"],
    codeSnippet: `<Switch
  label="Email notifications"
  checked={enabled}
  onChange={setEnabled}
/>
<Switch
  label="Marketing emails"
  description="Receive updates about new features."
  checked={marketing}
  onChange={setMarketing}
/>`,
    subComponents: [
      {
        component: "Switch",
        props: {
          checked: "boolean — controlled on/off state.",
          defaultChecked: "boolean — uncontrolled initial state.",
          onChange: "(checked: boolean) => void — note: receives the boolean directly, not an event.",
          label: "string — visible label.",
          description: "string — secondary descriptive text shown below the label.",
          disabled: "boolean",
          size: '"sm" | "md" | "lg"',
          className: "string - additional CSS classes for styling.",
        },
      },
    ],
    href: "/components/switch",
  },

  // ─── Overlays ─────────────────────────────────────────────────────────────

  {
    id: "dialog",
    name: "Dialog",
    category: "Overlays",
    description: "Modal window for critical information or decisions. Includes focus trapping, scroll locking, backdrop dismiss, and escape-to-close.",
    tags: ["modal", "popup", "overlay", "confirm", "alert", "focus trap", "portal", "prompt"],
    codeSnippet: `<Dialog open={open} onClose={() => setOpen(false)}>
  <DialogHeader>
    <DialogTitle>Delete project</DialogTitle>
    <DialogDescription>This action cannot be undone.</DialogDescription>
  </DialogHeader>
  <DialogFooter>
    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
  </DialogFooter>
</Dialog>`,
    subComponents: [
      {
        component: "Dialog",
        description: "Root — controls visibility and portal rendering.",
        props: {
          open: "boolean — controls whether the dialog is visible.",
          onClose: "() => void — called when the backdrop is clicked or Escape is pressed.",
          size: '"sm" | "md" | "lg" | "xl" | "full"',
          closeOnBackdrop: "boolean — close when clicking the backdrop. Default true.",
          closeOnEsc: "boolean — close on Escape key. Default true.",
          initialFocus: "RefObject<HTMLElement> — element to focus when dialog opens.",
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "DialogHeader",
        description: "Top section — wraps title and description.",
        props: { className: "string" },
      },
      {
        component: "DialogTitle",
        description: "Primary heading of the dialog. Linked to the dialog via aria-labelledby.",
        props: { className: "string" },
      },
      {
        component: "DialogDescription",
        description: "Secondary explanatory text below the title. Linked via aria-describedby.",
        props: { className: "string" },
      },
      {
        component: "DialogFooter",
        description: "Bottom action area — typically contains cancel and confirm buttons.",
        props: { className: "string" },
      },
    ],
    href: "/components/dialog",
  },

  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    category: "Overlays",
    description: "Contextual floating menu triggered by a button or right-click. Supports icons, shortcuts, separators, submenus, and checkable items.",
    tags: ["menu", "context", "popup", "actions", "options", "floating", "right-click", "submenu"],
    codeSnippet: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Options <ChevronDown /></Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onSelect={handleEdit}>
      <EditIcon /> Edit
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="danger" onSelect={handleDelete}>
      <TrashIcon /> Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    subComponents: [
      {
        component: "DropdownMenu",
        description: "Root — manages open state.",
        props: {
          open: "boolean — controlled open state.",
          onOpenChange: "(open: boolean) => void",
          modal: "boolean — lock scroll when open. Default true.",
        },
      },
      {
        component: "DropdownMenuTrigger",
        description: "Element that opens the menu on click.",
        props: {
          asChild: "boolean — render as child element instead of a wrapper <button>. Use with your own Button component.",
          disabled: "boolean",
        },
      },
      {
        component: "DropdownMenuContent",
        description: "The floating panel containing menu items.",
        props: {
          side: '"top" | "bottom" | "left" | "right" — preferred placement. Default bottom.',
          align: '"start" | "center" | "end" — alignment relative to trigger. Default start.',
          sideOffset: "number — gap between trigger and menu in px. Default 4.",
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "DropdownMenuItem",
        description: "A single clickable menu item.",
        props: {
          onSelect: "(e: Event) => void — fires when item is clicked or activated by keyboard.",
          disabled: "boolean — makes item non-interactive.",
          variant: '"default" | "danger" — danger applies destructive styling.',
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "DropdownMenuSeparator",
        description: "Horizontal divider between groups of items.",
        props: { className: "string" },
      },
    ],
    href: "/components/dropdown-menu",
  },

  // ─── Display ──────────────────────────────────────────────────────────────

  {
    id: "card",
    name: "Card",
    category: "Display",
    description: "Flexible surface container with optional header, body, and footer sections. Use for dashboards, listings, summaries, and data display.",
    tags: ["container", "surface", "panel", "box", "content", "dashboard", "list", "summary", "tile"],
    codeSnippet: `<Card>
  <CardHeader>
    <CardTitle>Monthly Revenue</CardTitle>
    <CardDescription>Jan – Mar 2025</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-3xl font-bold">$48,295</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">View report</Button>
  </CardFooter>
</Card>`,
    subComponents: [
      {
        component: "Card",
        description: "Root surface container.",
        props: {
          variant: '"default" | "outline" | "ghost"',
          padding: '"none" | "sm" | "md" | "lg"',
          hoverable: "boolean — adds a lift effect on hover.",
          onClick: "(e: React.MouseEvent) => void — makes the whole card clickable.",
          asChild: "boolean",
          className: "string - additional CSS classes for styling.",
        },
      },
      {
        component: "CardHeader",
        description: "Top section — typically contains CardTitle and CardDescription.",
        props: { className: "string" },
      },
      {
        component: "CardTitle",
        description: "Primary heading inside the card header.",
        props: { className: "string - additional CSS classes for styling.", asChild: "boolean" },
      },
      {
        component: "CardDescription",
        description: "Muted secondary text below the title.",
        props: { className: "string" },
      },
      {
        component: "CardContent",
        description: "Main body area of the card.",
        props: { className: "string" },
      },
      {
        component: "CardFooter",
        description: "Bottom section — typically contains actions.",
        props: { className: "string" },
      },
    ],
    href: "/components/card",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const CATEGORIES = [...new Set(COMPONENTS.map((c) => c.category))];

export function getByCategory(category: string): ComponentEntry[] {
  return COMPONENTS.filter((c) => c.category === category);
}

export function getComponent(id: string): ComponentEntry | undefined {
  return COMPONENTS.find((c) => c.id === id);
}