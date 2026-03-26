function Gallery() {
  const portfolio = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      image: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2",
      image: "https://picsum.photos/300/200?random=2"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of project 3",
      image: "https://picsum.photos/300/200?random=3"
    },
  ]
  return (
    <div>
      {
        portfolio.map((item: Record<string, any>) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <img src={item.image} alt="sample" />
          </div>
        ))
      }
    </div>
  )
}

export default Gallery 
