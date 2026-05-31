import clsx from "clsx";

export default function H4({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h4">) {
  return (
    <h4
      className={clsx("font-pixel text-3xl text-brand-rise", className)}
      {...props}
    >
      {children}
    </h4>
  );
}
