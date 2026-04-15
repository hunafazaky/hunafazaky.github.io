function Gallery({ title, items }: Record<string, any>) {
  return (
    <section className="m-2 p-4 bg-brand-dark text-brand-light rounded">
      <h2 id={title.toLowerCase().replace(/\s+/g, "-")} className="text-brand-dawn font-bold mb-2">
        {title}
      </h2>
      <div className="flex gap-2">
        {items.map((item: Record<string, any>, index: number) => (
          <article className="w-1/3" key={index}>
            <figure>
              <img src={item.image} alt={item.title} />
              <figcaption>
                <h3>
                  <a href={item.ref}>{item.title}</a>
                </h3>
                <p className="line-clamp-2">{item.description}</p>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
