import clsx from "clsx";

export default function List({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={clsx("flex flex-row", className)} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-3 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
        />
      </svg>
      <div className="flex-1">{children}</div>
    </div>
  );
}
