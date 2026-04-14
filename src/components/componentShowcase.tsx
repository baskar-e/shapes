import { motion } from 'motion/react';
import { Layers, MousePointerClick, Type, Box, ToggleLeft, Navigation, ChevronDown, CheckSquare, Search, SquareStack, MoreVertical, CircleDot, AppWindow, TextCursorInput, GalleryVertical, GalleryVerticalEnd, Send } from 'lucide-react';
import BorderGlow from './BorderGlow';

const components = [
  {
    name: 'Accordion',
    description: 'Collapsible content panels for organizing and toggling sections efficiently',
    icon: ChevronDown,
    tags: ['UI', 'Layout', 'Interaction'],
    link: '/accordion'
  },
  {
    name: 'Breadcrumbs',
    description: 'Navigation trail to help users understand and move through hierarchy',
    icon: Send,
    tags: ['Navigation', 'UX'],
    link: '/breadcrumbs'
  },
  {
    name: 'Button',
    description: 'Reusable button component with multiple variants and states',
    icon: MousePointerClick,
    tags: ['UI', 'Action'],
    link: '/button'
  },
  {
    name: 'Button Group',
    description: 'Group of related actions displayed together with consistent styling',
    icon: Layers,
    tags: ['UI', 'Action'],
    link: '/button-group'
  },
  {
    name: 'Card',
    description: 'Flexible container for grouping content with header, body, and footer',
    icon: Box,
    tags: ['UI', 'Layout'],
    link: '/card'
  },
  {
    name: 'Checkbox',
    description: 'Input control for selecting one or multiple options from a list',
    icon: CheckSquare,
    tags: ['Form', 'Input'],
    link: '/checkbox'
  },
  {
    name: 'Combobox',
    description: 'Searchable dropdown input combining text input with selectable options',
    icon: Search,
    tags: ['Form', 'Input', 'Dropdown'],
    link: '/combobox'
  },
  {
    name: 'Dialog',
    description: 'Modal overlay for displaying important information or actions',
    icon: GalleryVerticalEnd,
    tags: ['UI', 'Overlay'],
    link: '/dialog'
  },
  {
    name: 'Dropdown Menu',
    description: 'Contextual menu that displays a list of actions or navigation items',
    icon: MoreVertical,
    tags: ['UI', 'Menu'],
    link: '/dropdown-menu'
  },
  {
    name: 'Input',
    description: 'Basic text input field with validation and accessibility support',
    icon: Type,
    tags: ['Form', 'Input'],
    link: '/input'
  },
  {
    name: 'Input Group',
    description: 'Grouped inputs with addons like icons, labels, or buttons',
    icon: TextCursorInput,
    tags: ['Form', 'Layout'],
    link: '/input-group'
  },
  {
    name: 'Radio Group',
    description: 'Exclusive selection input allowing only one option at a time',
    icon: CircleDot,
    tags: ['Form', 'Input'],
    link: '/radio-group'
  },
  {
    name: 'Switch',
    description: 'Toggle control for binary on/off states with smooth interaction',
    icon: ToggleLeft,
    tags: ['Form', 'Input', 'Toggle'],
    link: '/switch'
  },
  {
    name: 'Tabs',
    description: 'Tabbed interface for switching between multiple content sections',
    icon: AppWindow,
    tags: ['UI', 'Navigation'],
    link: '/tabs'
  },
];

export function ComponentShowcase() {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[hsl(240,10%,4%)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-50">
            Component Collection
          </h2>
          <p className="mt-4 text-[#94949e] text-lg max-w-2xl mx-auto">
            Beautiful, animated React components ready to drop into your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {components.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <BorderGlow
                glowColor="270 80 60"
                colors={['#c084fc', '#a855f7', '#7c3aed']}
                borderRadius={12}
                glowRadius={30}
                edgeSensitivity={15}
                glowIntensity={1.2}
                backgroundColor='#131316'
                className='h-full'
              >
                <a href='#' className="flex flex-col h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[#8249df1a] flex items-center justify-center text-violet-600">
                      <comp.icon className={`w-5 h-5 [.lucide-circle-dot]:*:last:[r:4px] [.lucide-circle-dot]:*:last:fill-violet-600`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-50 text-base">
                        {comp.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#94949e] leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-auto flex flex-wrap gap-1.5">
                    {comp.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-[#8249df1a] text-violet-600/80 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
