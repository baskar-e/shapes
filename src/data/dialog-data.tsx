import { t } from "@/components/codeBlock"

const items = [
    { word: { text: '' } },
    {
        word: [
            t("keyword", "const"),
            t("variable", "fruits"),
            t("keyword", "="),
            t("bracket", "[", false),
            t("text", "Apple,"),
            t("text", "Banana,"),
            t("text", "Carrot,"),
            t("text", "Mango", false),
            t("bracket", "]", false),
            t("text", ";", false),
        ]
    },
    { word: { text: '' } }
]

const itemsLabel = [
    { word: { text: '' } },
    {
        word: [
            t("keyword", "const"),
            t("variable", "fruitsLabel"),
            t("keyword", "="),
            t("bracket", "[", false),
        ],
        level: [
            {
                word: [
                    t("bracket", "{"), t("text", "name:"), t("string", "\"Apple\"", false), t("text", ","), t("text", "color:"), t("string", "\"Red\""), t("bracket", "}", false), t("text", ",")
                ]
            },
            {
                word: [
                    t("bracket", "{"), t("text", "name:"), t("string", "\"Banana\"", false), t("text", ","), t("text", "color:"), t("string", "\"Yellow\""), t("bracket", "}", false), t("text", ",")
                ]
            },
            {
                word: [
                    t("bracket", "{"), t("text", "name:"), t("string", "\"Carrot\"", false), t("text", ","), t("text", "color:"), t("string", "\"Orange\""), t("bracket", "}", false), t("text", ",")
                ]
            },
            {
                word: [
                    t("bracket", "{"), t("text", "name:"), t("string", "\"Mango\"", false), t("text", ","), t("text", "color:"), t("string", "\"Green\""), t("bracket", "}", false)
                ]
            }
        ]
    },
    {
        word: { "bracket": "]", "text": ";", "space": false }
    },
    { word: { text: '' } }
]

const itemsValue = [
    { word: { text: '' } },
    {
        word: [
            t("keyword", "const"),
            t("variable", "fruitsValue"),
            t("keyword", "="),
            t("bracket", "[", false),
        ],
        level: [
            {
                word: [
                    t("bracket", "{"), t("text", "id:"), t("string", "1", false), t("text", ","), t("text", "name:"), t("string", "\"Apple\""), t("bracket", "}", false), t("text", ",")
                ]
            },
            {
                word: [
                    t("bracket", "{"), t("text", "id:"), t("string", "2", false), t("text", ","), t("text", "name:"), t("string", "\"Banana\""), t("bracket", "}", false), t("text", ",")
                ]
            },
            {
                word: [
                    t("bracket", "{"), t("text", "id:"), t("string", "3", false), t("text", ","), t("text", "name:"), t("string", "\"Carrot\""), t("bracket", "}", false), t("text", ",")
                ]
            },
            {
                word: [
                    t("bracket", "{"), t("text", "id:"), t("string", "4", false), t("text", ","), t("text", "name:"), t("string", "\"Mango\""), t("bracket", "}", false)
                ]
            }
        ]
    },
    {
        word: { "bracket": "]", "text": ";", "space": false }
    },
    { word: { text: '' } }
]

const itemsDisabled = [
    { word: { text: '' } },
    {
        word: [
            t("keyword", "const"),
            t("variable", "fruitsDisabled"),
            t("keyword", "="),
            t("bracket", "[", false),
        ],
        level: [
            {
                word: [
                    t("bracket", "{"), t("text", "id:"), t("string", "1", false), t("text", ","), t("text", "name:"), t("string", "\"Apple\"", false), t("text", ","), t("text", "invalid:"), t("string", "true", false), t("bracket", "}", false), t("text", ",")
                ]
            },
            {
                word: [
                    t("bracket", "{"), t("text", "id:"), t("string", "2", false), t("text", ","), t("text", "name:"), t("string", "\"Banana\""), t("bracket", "}", false), t("text", ",")
                ]
            },
            {
                word: [
                    t("bracket", "{"), t("text", "id:"), t("string", "3", false), t("text", ","), t("text", "name:"), t("string", "\"Carrot\"", false), t("text", ","), t("text", "invalid:"), t("string", "true", false), t("bracket", "}", false), t("text", ",")
                ]
            },
            {
                word: [
                    t("bracket", "{"), t("text", "id:"), t("string", "4", false), t("text", ","), t("text", "name:"), t("string", "\"Mango\""), t("bracket", "}", false)
                ]
            }
        ]
    },
    {
        word: { "bracket": "]", "text": ";", "space": false }
    },
    { word: { text: '' } }
]

const comboboxContent = [
    {
        word: [
            t("tag", "<ComboboxInput"),
            t("prop", "placeholder", false),
            t("keyword", "=", false),
            t("string", '"Select an option..."'),
            t("tag", "/>")
        ]
    },
    {
        word: { "tag": "<ComboboxContent>" },
        level: [
            {
                word: { "tag": "<ComboboxEmpty />" },
            },
            {
                word: { "tag": "<ComboboxList>" },
                level: [
                    {
                        word: [
                            t("bracket", "{", false),
                            t("bracket", "(", false),
                            t("variable", "item", false),
                            t("bracket", ")"),
                            t("keyword", "=>"),
                            t("bracket", "(")
                        ]
                    },
                    {
                        level: [
                            {
                                word: [
                                    t("tag", "<ComboboxItem"),
                                    t("prop", "key", false),
                                    t("keyword", "=", false),
                                    t("bracket", "{", false),
                                    t("text", "item.name", false),
                                    t("bracket", "}"),
                                    t("prop", "value", false),
                                    t("keyword", "=", false),
                                    t("bracket", "{", false),
                                    t("text", "item", false),
                                    t("bracket", "}", false),
                                    t("tag", ">")
                                ],
                                level: [
                                    {
                                        word: [
                                            t("bracket", "{", false),
                                            t("text", "item.name", false),
                                            t("bracket", "}")
                                        ]
                                    }
                                ]
                            },
                            {
                                word: { "tag": "</ComboboxItem>" }
                            }
                        ]
                    },
                    {
                        word: { "bracket": ")}" }
                    }
                ]
            },
            {
                word: { "tag": "</ComboboxList>" }
            }
        ]
    },
    {
        word: { "tag": "</ComboboxContent>" }
    }
];

export const comboboxCode = [
    {
        word: { keyword: 'import', bracket: '{' },
        level: [
            {
                word: { text: 'Combobox,', },
            },
            {
                word: { text: 'ComboboxContent,' },
            },
            {
                word: { text: 'ComboboxEmpty,' },
            },
            {
                word: { text: 'ComboboxInput,' },
            },
            {
                word: { text: 'ComboboxItem,' },
            },
            {
                word: { text: 'ComboboxList' },
            }
        ],
    },
    {
        word: { bracket: '}', keyword: 'from', string: '"@/components/ui/combobox"' }
    }
]

export const comboboxUsage = [
    {
        word: { "tag": "<Combobox>" },
        level: [
            {
                word: { "tag": "<ComboboxInput />" }
            },
            {
                word: { "tag": "<ComboboxContent>" },
                level: [
                    {
                        word: { "tag": "<ComboboxEmpty />" }
                    },
                    {
                        word: { "tag": "<ComboboxList>" },

                        level: [
                            {
                                word: { "tag": "<ComboboxItem" },
                                level: [
                                    {
                                        word: { text: "Item" }
                                    }
                                ]
                            },
                            {
                                word: [t("tag", "</ComboboxItem>")]
                            }
                        ]
                    },
                    {
                        word: [t("tag", "</ComboboxList>")]
                    }
                ]
            },
            {
                word: [t("tag", "</ComboboxContent>")]
            }
        ]
    },
    {
        word: [t("tag", "</Combobox>")]
    }
];

export const comboboxBasic = [
    ...comboboxCode,
    ...items,
    {
        word: [t("keyword", "export function"), t("function", "ComboboxBasic", false), t("bracket", "() {")],
        level: [
            {
                word: {
                    "keyword": "return",
                    "bracket": "("
                },
            },
            {
                level: [
                    {
                        word: [
                            t("tag", "<Combobox"),
                            t("prop", "items", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("text", "fruits", false),
                            t("bracket", "}", false),
                            t("tag", ">")
                        ],
                        level: [
                            {
                                word: [
                                    t("tag", "<ComboboxInput"),
                                    t("prop", "placeholder", false),
                                    t("keyword", "=", false),
                                    t("string", '"Select an option..."'),
                                    t("tag", "/>")
                                ]
                            },
                            {
                                word: { "tag": "<ComboboxContent>" },
                                level: [
                                    {
                                        word: { "tag": "<ComboboxEmpty />" }
                                    },
                                    {
                                        word: { "tag": "<ComboboxList>" },
                                        level: [
                                            {
                                                word: [
                                                    t("bracket", "{", false),
                                                    t("bracket", "(", false),
                                                    t("variable", "item", false),
                                                    t("bracket", ")"),
                                                    t("keyword", "=>"),
                                                    t("bracket", "(")
                                                ]
                                            },
                                            {
                                                level: [
                                                    {
                                                        word: [
                                                            t("tag", "<ComboboxItem"),
                                                            t("prop", "key", false),
                                                            t("keyword", "=", false),
                                                            t("bracket", "{", false),
                                                            t("text", "item", false),
                                                            t("bracket", "}"),
                                                            t("prop", "value", false),
                                                            t("keyword", "=", false),
                                                            t("bracket", "{", false),
                                                            t("text", "item", false),
                                                            t("bracket", "}", false),
                                                            t("tag", ">")
                                                        ],
                                                        level: [
                                                            {
                                                                word: [
                                                                    t("bracket", "{", false),
                                                                    t("text", "item", false),
                                                                    t("bracket", "}")
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        word: { "tag": "</ComboboxItem>" }
                                                    }
                                                ]
                                            },
                                            {
                                                word: { "bracket": ")}" }
                                            }
                                        ]
                                    },
                                    {
                                        word: { "tag": "</ComboboxList>" }
                                    }
                                ]
                            },
                            {
                                word: { "tag": "</ComboboxContent>" }
                            }
                        ]
                    },
                    {
                        word: { "tag": "</Combobox>" }
                    }
                ]
            },
            {
                word: { bracket: ')' }
            }
        ]
    },
    {
        word: { bracket: '}' }
    }
]

export const comboboxLabel = [
    ...comboboxCode,
    ...itemsLabel,
    {
        word: [t("keyword", "export function"), t("function", "ComboboxLabel", false), t("bracket", "() {")],
        level: [
            {
                word: {
                    "keyword": "return",
                    "bracket": "("
                },
            },
            {
                level: [
                    {
                        word: [
                            t("tag", "<Combobox"),
                            t("prop", "items", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("text", "fruitsLabel", false),
                            t("bracket", "}"),
                            t("prop", "labelKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("string", "'name'", false),
                            t("bracket", "}", false),
                            t("tag", ">")
                        ],
                        level: comboboxContent
                    },
                    {
                        word: { "tag": "</Combobox>" }
                    }
                ]
            },
            {
                word: { bracket: ')' }
            }
        ]
    },
    {
        word: { bracket: '}' }
    }
];

export const comboboxLabelFn = [
    ...comboboxCode,
    ...itemsLabel,
    {
        word: [t("keyword", "export function"), t("function", "ComboboxLabelFn", false), t("bracket", "() {")],
        level: [
            {
                word: {
                    "keyword": "return",
                    "bracket": "("
                },
            },
            {
                level: [
                    {
                        word: [
                            t("tag", "<Combobox"),
                            t("prop", "items", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("text", "fruitsLabel", false),
                            t("bracket", "}"),
                            t("prop", "labelKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{(", false),
                            t("variable", "item", false),
                            t("bracket", ")"),
                            t("keyword", "=>"),
                            t("string", "`", false),
                            t("bracket", "${", false),
                            t("text", "item.name", false),
                            t("bracket", "}"),
                            t("keyword", "-"),
                            t("bracket", "{", false),
                            t("text", "item.color", false),
                            t("bracket", "}", false),
                            t("string", "`", false),
                            t("bracket", "}", false),
                            t("tag", ">")
                        ],
                        level: [
                            {
                                word: [
                                    t("tag", "<ComboboxInput"),
                                    t("prop", "placeholder", false),
                                    t("keyword", "=", false),
                                    t("string", '"Select an option..."'),
                                    t("tag", "/>")
                                ]
                            },
                            {
                                word: { "tag": "<ComboboxContent>" },
                                level: [
                                    {
                                        word: { "tag": "<ComboboxEmpty />" },
                                    },
                                    {
                                        word: { "tag": "<ComboboxList>" },
                                        level: [
                                            {
                                                word: [
                                                    t("bracket", "{", false),
                                                    t("bracket", "(", false),
                                                    t("variable", "item", false),
                                                    t("bracket", ")"),
                                                    t("keyword", "=>"),
                                                    t("bracket", "(")
                                                ]
                                            },
                                            {
                                                level: [
                                                    {
                                                        word: [
                                                            t("tag", "<ComboboxItem"),
                                                            t("prop", "key", false),
                                                            t("keyword", "=", false),
                                                            t("bracket", "{", false),
                                                            t("text", "item.name", false),
                                                            t("bracket", "}"),
                                                            t("prop", "value", false),
                                                            t("keyword", "=", false),
                                                            t("bracket", "{", false),
                                                            t("text", "item", false),
                                                            t("bracket", "}", false),
                                                            t("tag", ">")
                                                        ],
                                                        level: [
                                                            {
                                                                word: [
                                                                    t("bracket", "{", false),
                                                                    t("text", "item.name", false),
                                                                    t("bracket", "}"),
                                                                    t("keyword", "-"),
                                                                    t("bracket", "{", false),
                                                                    t("text", "item.color", false),
                                                                    t("bracket", "}", false),
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        word: { "tag": "</ComboboxItem>" }
                                                    }
                                                ]
                                            },
                                            {
                                                word: { "bracket": ")}" }
                                            }
                                        ]
                                    },
                                    {
                                        word: { "tag": "</ComboboxList>" }
                                    }
                                ]
                            },
                            {
                                word: { "tag": "</ComboboxContent>" }
                            }
                        ]
                    },
                    {
                        word: { "tag": "</Combobox>" }
                    }
                ]
            },
            {
                word: { bracket: ')' }
            }
        ]
    },

    {
        word: { bracket: '}' }
    }
];

export const comboboxValue = [
    ...comboboxCode,
    ...itemsValue,
    {
        word: [t("keyword", "export function"), t("function", "ComboboxValue", false), t("bracket", "() {")],
        level: [
            {
                word: {
                    "keyword": "return",
                    "bracket": "("
                },
            },
            {
                level: [

                    {
                        word: [
                            t("tag", "<Combobox"),
                            t("prop", "items", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("text", "fruitsValue", false),
                            t("bracket", "}"),
                            t("prop", "labelKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("string", "'name'", false),
                            t("bracket", "}"),
                            t("prop", "valueKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("string", "'id'", false),
                            t("bracket", "}", false),
                            t("tag", ">")
                        ],
                        level: comboboxContent
                    },
                    {
                        word: { "tag": "</Combobox>" }
                    }
                ]
            },
            {
                word: { bracket: ')' }
            }
        ]
    },
    {
        word: { bracket: '}' }
    }
];

export const comboboxValueFn = [
    ...comboboxCode,
    ...itemsValue,
    {
        word: [t("keyword", "export function"), t("function", "ComboboxValueFn", false), t("bracket", "() {")],
        level: [
            {
                word: {
                    "keyword": "return",
                    "bracket": "("
                },
            },
            {
                level: [

                    {
                        word: [
                            t("tag", "<Combobox"),
                            t("prop", "items", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("text", "fruitsValue", false),
                            t("bracket", "}"),
                            t("prop", "labelKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("string", "'name'", false),
                            t("bracket", "}"),
                            t("prop", "valueKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{(", false),
                            t("variable", "item", false),
                            t("bracket", ")"),
                            t("keyword", "=>"),
                            t("function", "String", false),
                            t("bracket", "(", false),
                            t("text", "item.id", false),
                            t("bracket", ")}", false),
                            t("tag", ">")
                        ],
                        level: comboboxContent
                    },
                    {
                        word: { "tag": "</Combobox>" }
                    }
                ]
            },
            {
                word: { bracket: ')' }
            }
        ]
    },
    {
        word: { bracket: '}' }
    }
];

export const comboboxDisabled = [
    ...comboboxCode,
    ...itemsDisabled,
    {
        word: [t("keyword", "export function"), t("function", "ComboboxDisabled", false), t("bracket", "() {")],
        level: [
            {
                word: {
                    "keyword": "return",
                    "bracket": "("
                },
            },
            {
                level: [

                    {
                        word: [
                            t("tag", "<Combobox"),
                            t("prop", "items", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("text", "fruitsDisabled", false),
                            t("bracket", "}"),
                            t("prop", "labelKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("string", "'name'", false),
                            t("bracket", "}"),
                            t("prop", "disabledKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("string", "'invalid'", false),
                            t("bracket", "}", false),
                            t("tag", ">")
                        ],
                        level: comboboxContent
                    },
                    {
                        word: { "tag": "</Combobox>" }
                    }
                ]
            },
            {
                word: { bracket: ')' }
            }
        ]
    },
    {
        word: { bracket: '}' }
    }
];

export const comboboxDisabledFn = [
    ...comboboxCode,
    ...itemsDisabled,
    {
        word: [t("keyword", "export function"), t("function", "ComboboxDisabledFn", false), t("bracket", "() {")],
        level: [
            {
                word: {
                    "keyword": "return",
                    "bracket": "("
                },
            },
            {
                level: [

                    {
                        word: [
                            t("tag", "<Combobox"),
                            t("prop", "items", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("text", "fruitsDisabled", false),
                            t("bracket", "}"),
                            t("prop", "labelKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("string", "'name'", false),
                            t("bracket", "}"),
                            t("prop", "disabledKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{(", false),
                            t("variable", "item", false),
                            t("bracket", ")"),
                            t("keyword", "=>"),
                            t("keyword", "!!", false),
                            t("bracket", "(", false),
                            t("text", "item.id ", false),
                            t("keyword", "==="),
                            t("text", "1 ", false),
                            t("keyword", "&&"),
                            t("text", "item.invalid", false),
                            t("bracket", ")}", false),
                            t("tag", ">")
                        ],
                        level: comboboxContent
                    },
                    {
                        word: { "tag": "</Combobox>" }
                    }
                ]
            },
            {
                word: { bracket: ')' }
            }
        ]
    },
    {
        word: { bracket: '}' }
    }
];

export const comboboxAutoHighlight = [
    ...comboboxCode,
    ...itemsLabel,
    {
        word: [t("keyword", "export function"), t("function", "ComboboxAutoHighlight", false), t("bracket", "() {")],
        level: [
            {
                word: {
                    "keyword": "return",
                    "bracket": "("
                },
            },
            {
                level: [

                    {
                        word: [
                            t("tag", "<Combobox"),
                            t("prop", "items", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("text", "fruits", false),
                            t("bracket", "}"),
                            t("prop", "labelKey", false),
                            t("keyword", "=", false),
                            t("bracket", "{", false),
                            t("string", "'name'", false),
                            t("bracket", "}"),
                            t("prop", "autoHighlight", false),
                            t("tag", ">")
                        ],
                        level: comboboxContent
                    },
                    {
                        word: { "tag": "</Combobox>" }
                    }
                ]
            },
            {
                word: { bracket: ')' }
            }
        ]
    },
    {
        word: { bracket: '}' }
    }
];

export const dialogPropsData = [
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
    }
];

export const dialogContentPropsData = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">showCloseButton</span>,
        type: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">boolean</span>,
        default: 'true',
        description: "indicates whether the close button will be displayed within the dialog component."
    },
]

export const dialogButtonAttribute = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">data-state</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">"open" | "closed"</span>,
        description: "Indicates whether the modal is opened or closed."
    }
]

export const dialogOverlayPropsData = [
    {
        name: <span className="inline-block bg-gray-100 px-2 py-1 rounded-md">portal</span>,
        type: <span className="inline-block w-max bg-gray-100 px-2 py-1 rounded-md">{"RefObject<HTMLElement | null>"}</span>,
        default: 'document.body',
        description: "Specify a container element to render the content into via a portal."
    }
]