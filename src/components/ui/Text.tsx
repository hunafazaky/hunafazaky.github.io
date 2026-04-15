export default function Text({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className="mb-4 text-xs" {...props}>
      {children}
    </p>
  );
}
