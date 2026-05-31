import Navbar from "./components/content/Navbar";
import Hero from "./components/content/Hero";
import Profile from "./components/content/Profile";
import Timeline from "./components/content/Timeline";
import Skills from "./components/content/Skills";
import Achievements from "./components/content/Achievements";
import Footer from "./components/content/Footer";

const menus = ["Profile", "Timeline", "Skills", "Achievements"];

function App() {
  return (
    <div>
      <Navbar menus={menus} />
      <Hero />
      <Profile />
      <Timeline />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
