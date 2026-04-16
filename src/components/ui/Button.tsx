export default function Button({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className="md:hidden text-white hover:text-yellow-400 text-2xl focus:outline-none"
      {...props}
    >
      {children}
    </button>
  );
}
