function Gallery({title, items}: Record<string, any>) {
  return (
    <section>
      <h2>{title}</h2>
      {
        items.map((item: Record<string, any>) => (
          <article>
            <figure>
              <img src={item.image} alt={item.title} />
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </figcaption>
            </figure>
          </article>
        ))
      }
    </section>
  )
}

export default Gallery
