export default function HyperLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className="text-md md:text-2xl xl:text-3xl text-brand-light hover:text-brand-dawn "
      {...props}
    >
      {children}
    </a>
  );
}
