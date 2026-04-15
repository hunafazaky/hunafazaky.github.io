export default function Button({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  return <button {...props}>{children}</button>;
}
