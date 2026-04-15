export default function H4({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h4">) {
  return (
    <h4
      className="font-pixel text-2xl mb-4 border-brand-dawn"
      {...props}
    >
      {children}
    </h4>
  );
}
