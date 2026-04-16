export default function H4({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h4">) {
  return (
    <h4
      className="font-pixel text-xl"
      {...props}
    >
      {children}
    </h4>
  );
}
