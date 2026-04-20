import clsx from "clsx";
// import List from "../ui/List";

type ListItem = string | Record<string, string>;

type ContentListProps = {
  className?: string;
  titles?: string;
  list: ListItem[];
  [key: string]: any;
};

function ContentList({ className, list, ...props }: ContentListProps) {
  return (
    <div className="text-xs flex flex-col gap-2 my-2">
      {list.map((item, index) => (
        // <item>{item}</item>
        <div key={index} className={clsx("flex flex-row", className)} {...props}>
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
          <div className="flex-1">
            {typeof item === "string" && item}
            {typeof item === "object" && item !== null && (
              <div>
                <div className="text-brand-rise font-bold">
                  {Object.keys(item)}
                </div>
                <div>{Object.values(item)}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
  // <article>{children}</article>;
}

export default ContentList;
