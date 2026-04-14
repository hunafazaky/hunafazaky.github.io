// import './App.css'
import Navbar from './components/blocks/Navbar'
import Hero from './components/blocks/Hero'
import Gallery from './components/blocks/Gallery'
import Footer from './components/Footer'

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

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery title="Portfolio" items={portfolio}/>
      <Footer />
    </div>
  )
}

export default App
