import clsx from "clsx";

export default function H6({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h6">) {
  return (
    <h6 className={clsx("font-pixel text-xl", className)} {...props}>
      {children}
    </h6>
  );
}
