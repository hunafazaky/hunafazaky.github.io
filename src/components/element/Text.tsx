import clsx from "clsx";

export default function Text({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className={clsx("mb-4 text-sm", className)} {...props}>
      {children}
    </p>
  );
}
