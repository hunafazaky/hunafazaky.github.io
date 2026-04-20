import Text from "../ui/Text";
import H5 from "../ui/H5";

type ContentProps = {
  title: Record<string, string>;
  date?: string;
  description: string;
};

function Content({ title, date, description }: ContentProps) {
  return (
    <div className="mb-4">
      <H5>
        <div className="text-brand-forest">{title.main}</div>
        <div>{title.sub}</div>
      </H5>
      <Text className="opacity-60">{date}</Text>
      <Text>{description}</Text>
    </div>
  );
}

export default Content;
