import clsx from "clsx";

export default function Button({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={clsx(
        "text-white hover:text-yellow-400 text-2xl focus:outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
