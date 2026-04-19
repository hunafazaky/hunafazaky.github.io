import clsx from "clsx";

export default function H3({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={clsx(
        "font-pixel text-4xl text-brand-dawn border-b-4 border-double mb-4 pt-10 border-brand-dawn",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
``