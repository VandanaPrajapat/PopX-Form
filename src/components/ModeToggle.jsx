"use client";
import { useTheme } from "./ThemeProvider";
import { Menu, Transition } from "@headlessui/react";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
        <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
        <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-300" />
        <span className="sr-only">Toggle theme</span>
      </Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right rounded-xl glass-card border-white/20 dark:border-gray-700/20 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setTheme("light")}
                  className={`${
                    active
                      ? "bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100"
                      : "text-gray-900 dark:text-gray-100"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Light
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setTheme("dark")}
                  className={`${
                    active
                      ? "bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100"
                      : "text-gray-900 dark:text-gray-100"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Dark
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    if (
                      window.matchMedia("(prefers-color-scheme: dark)").matches
                    ) {
                      setTheme("dark");
                    } else {
                      setTheme("light");
                    }
                  }}
                  className={`${
                    active
                      ? "bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100"
                      : "text-gray-900 dark:text-gray-100"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  System
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
