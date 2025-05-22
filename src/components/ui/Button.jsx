export function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default:
      "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 dark:from-purple-500 dark:to-purple-700 dark:hover:from-purple-600 dark:hover:to-purple-800 text-white",
    outline:
      "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-200 dark:border-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30",
    ghost:
      "hover:bg-purple-100 dark:hover:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    link: "text-purple-600 dark:text-purple-400 underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-12 rounded-md px-8 text-lg",
    icon: "h-9 w-9",
  };

  const variantStyle = variants[variant] || variants.default;
  const sizeStyle = sizes[size] || sizes.default;

  return (
    <button
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
