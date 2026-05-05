import { useState } from "react";

export default function Welcome() {
  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode() {
    const next = !isDark;
    setIsDark(next);

    if (next) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center gap-6 transition-colors">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Hello, Tailwind
      </h1>

      <p className="text-gray-500 dark:text-gray-400 text-lg">
        A clean starting point.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:opacity-80 transition">
          Get Started
        </button>
        <button
          className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={toggleDarkMode}
        >
          {isDark ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}
