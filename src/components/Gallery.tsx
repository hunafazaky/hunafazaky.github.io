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
    <div className="flex align-center justify-center gap-4 flex-wrap m-4 p-4">
      {
        portfolio.map((item: Record<string, any>) => (
          <div key={item.id} className="center">
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
