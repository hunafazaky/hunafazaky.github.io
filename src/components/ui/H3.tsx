export default function H3({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className="font-pixel text-3xl text-brand-dawn border-b-2 mb-4 border-brand-dawn"
      {...props}
    >
      {children}
    </h3>
  );
}
