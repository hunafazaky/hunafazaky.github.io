import H6 from "../ui/H6";
import Text from "../ui/Text";

function Gallery({ items }: Record<string, any>) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {items.map((item: Record<string, any>, index: number) => (
        <article
        key={index}
        className="w-full bg-brand-rise bg-dither text-brand-dark border-8 border-double shadow-xs shadow-brand-light border-brand-dark p-4"
        >
          <figure>
            <img src={item.image} className="w-full border-2" alt={item.title} />
            <figcaption>
              <H6 className="text-brand-sea">
                <a href={item.ref}>{item.title}</a>
              </H6>
              <Text className="line-clamp-2">{item.description}</Text>
            </figcaption>
          </figure>
        </article>
      ))}
    </div>
  );
}

export default Gallery;
