import H3 from "../ui/H3";

function Content({ children, title }: Record<string, any>) {
  return (
    <section
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="p-8 bg-center text-brand-light bg-cover h-screen flex flex-col"
    >
      <H3>{title}</H3>
      <article>{children}</article>
    </section>
  );
}

export default Content;
