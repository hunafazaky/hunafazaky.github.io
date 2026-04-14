// import './App.css'
import Navbar from './components/blocks/Navbar'
import Hero from './components/blocks/Hero'
import Gallery from './components/blocks/Gallery'
import Footer from './components/Footer'

const projects = [
    {
      id: 1,
      title: "Local Weather App",
      description: "Local Weather App is a web application that provides real-time weather information based on the user's location. It utilizes the OpenWeatherMap API to fetch current weather data, including temperature, humidity, wind speed, and weather conditions. The app features a user-friendly interface with responsive design, allowing users to easily access weather information on various devices. Users can also search for weather conditions in different cities around the world. The Local Weather App is built using HTML, CSS, and JavaScript, making it a lightweight and efficient tool for staying informed about the weather.",
      image: "https://picsum.photos/300/200?random=1",
      ref: 'https://hunafazaky.github.io/local-weather-app'
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2",
      image: "https://picsum.photos/300/200?random=2",
      ref: '/'
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of project 3",
      image: "https://picsum.photos/300/200?random=3",
      ref: '/'
    },
  ]
const certificates = [
    {
      id: 1,
      title: "Certificates 1",
      description: "Description of Certificates 1",
      image: "https://picsum.photos/300/200?random=4"
    },
    {
      id: 2,
      title: "Certificates 2",
      description: "Description of Certificates 2",
      image: "https://picsum.photos/300/200?random=5"
    },
    {
      id: 3,
      title: "Certificates 3",
      description: "Description of Certificates 3",
      image: "https://picsum.photos/300/200?random=6"
    },
  ]

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery title="projects" items={projects}/>
      <Gallery title="certificates" items={certificates}/>
      <Footer />
    </div>
  )
}

export default App
