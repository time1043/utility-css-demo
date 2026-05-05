const stats = [
  { label: "Total Revenue", value: "$45,231", change: "+20.1%", up: true },
  { label: "Subscriptions", value: "+2,350", change: "+180.1%", up: true },
  { label: "Active Users", value: "+12,234", change: "+19%", up: true },
  { label: "Bounce Rate", value: "21.3%", change: "-4.5%", up: false },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            {stat.label}
          </p>
          <p className="text-2xl font-bold">{stat.value}</p>
          <p
            className={`text-xs mt-2 ${
              stat.up
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {stat.change} from last month
          </p>
        </div>
      ))}
    </div>
  );
}
