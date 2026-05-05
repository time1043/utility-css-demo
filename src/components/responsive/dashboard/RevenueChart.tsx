const data = [40, 65, 50, 80, 45, 70, 90, 60, 75, 55, 85, 95];

export default function RevenueChart() {
  return (
    <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
      <h2 className="text-lg font-semibold mb-4">Revenue</h2>
      <div className="h-64 flex items-end gap-2 px-4">
        {data.map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-blue-500/80 dark:bg-blue-400/80 rounded-t-md transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-300"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between px-4 mt-2 text-xs text-gray-400">
        <span>Jan</span>
        <span>Jun</span>
        <span>Dec</span>
      </div>
    </div>
  );
}
