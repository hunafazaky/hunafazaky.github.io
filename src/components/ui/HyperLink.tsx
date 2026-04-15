export default function HyperLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a className="text-md md:text-2xl xl:text-3xl" {...props}>
      {children}
    </a>
  );
}
