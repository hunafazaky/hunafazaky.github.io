import clsx from "clsx";

export default function H1({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className={clsx("font-pixel text-6xl", className)} {...props}>
      {children}
    </h1>
  );
}
