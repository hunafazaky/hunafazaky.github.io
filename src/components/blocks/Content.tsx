import H3 from "../ui/H3";

function Content({ children, title }: Record<string, any>) {
  return (
    <section
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="p-8 pt-24 text-brand-light flex flex-col min-h-dvh"
    >
      <H3>{title}</H3>
      <article>{children}</article>
    </section>
  );
}

export default Content;
