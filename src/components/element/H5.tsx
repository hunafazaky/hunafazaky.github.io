import clsx from "clsx";

export default function H5({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h5">) {
  return (
    <h5 className={clsx("font-pixel text-2xl", className)} {...props}>
      {children}
    </h5>
  );
}
