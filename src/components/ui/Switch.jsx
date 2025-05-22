"use client";
import * as SwitchPrimitive from "@headlessui/react";

export function Switch({ checked, onChange, id, className = "", ...props }) {
  return (
    <SwitchPrimitive.Switch
      checked={checked}
      onChange={onChange}
      id={id}
      data-state={checked ? "checked" : "unchecked"}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 outline-none
        ${checked ? "bg-[#7c3aed]" : "bg-gray-200 dark:bg-gray-700"}
        
        ${className}
      `}
      {...props}
    >
      <span
        className={`
          inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-300 ease-in-out
          ${checked ? "translate-x-6" : "translate-x-0.5"}
        `}
      />
    </SwitchPrimitive.Switch>
  );
}
