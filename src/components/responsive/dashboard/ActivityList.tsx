const activities = [
  { user: "Alice", action: "created a new project", time: "2 min ago" },
  { user: "Bob", action: "updated billing info", time: "15 min ago" },
  { user: "Charlie", action: "deployed v2.1.0", time: "1 hour ago" },
  { user: "Diana", action: "invited 3 new members", time: "2 hours ago" },
  { user: "Eve", action: "archived old reports", time: "5 hours ago" },
];

export default function ActivityList() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium shrink-0">
              {item.user[0]}
            </div>
            <div className="min-w-0">
              <p className="text-sm">
                <span className="font-medium">{item.user}</span>{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  {item.action}
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
