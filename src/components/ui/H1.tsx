export default function H1({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className="font-pixel mb-4 text-6xl text-center" {...props}>
      {children}
    </h1>
  );
}
