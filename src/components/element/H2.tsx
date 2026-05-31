import clsx from "clsx";

export default function H2({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className={clsx("font-pixel text-5xl", className)} {...props}>
      {children}
    </h2>
  );
}
