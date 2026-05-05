import BreakpointIndicator from "./BreakpointIndicator";

const features = [
  {
    icon: " ",
    title: "Lightning Fast",
    description: "Built on Vite for instant HMR and blazing fast builds.",
    tag: "Performance",
  },
  {
    icon: "  ",
    title: "Dark Mode",
    description:
      "Toggle between light and dark themes with smooth transitions.",
    tag: "UI",
  },
  {
    icon: " ",
    title: "Responsive",
    description: "Adapts beautifully from mobile to ultra-wide screens.",
    tag: "Layout",
  },
  {
    icon: " ",
    title: "Utility-First",
    description: "Compose designs directly in markup with Tailwind CSS.",
    tag: "CSS",
  },
  {
    icon: " ",
    title: "Type Safe",
    description: "Full TypeScript support catches errors before runtime.",
    tag: "DX",
  },
  {
    icon: " ",
    title: "Component Based",
    description: "Modular React components that are easy to reuse and test.",
    tag: "Architecture",
  },
  {
    icon: " ",
    title: "Accessible",
    description: "Semantic HTML and ARIA attributes built in from the start.",
    tag: "A11y",
  },
  {
    icon: " ",
    title: "Zero Config",
    description:
      "Sensible defaults that work out of the box. Customize when needed.",
    tag: "DX",
  },
];

export default function ResponsiveGrid() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-12 sm:px-6 lg:px-8 transition-colors">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Responsive Card Grid
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          Resize the browser to see the grid adapt. Uses Tailwind responsive
          prefixes:{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded text-sm">
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          </code>
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg dark:shadow-none dark:ring-1 dark:ring-gray-700 hover:dark:ring-gray-600 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <span className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full mb-3">
              {feature.tag}
            </span>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </article>
        ))}
      </div>

      <BreakpointIndicator />
    </div>
  );
}
