export default function H2({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className="font-pixel mb-4 text-4xl" {...props}>
      {children}
    </h2>
  );
}
