// import './App.css'
import Navbar from "./components/blocks/Navbar";
import Hero from "./components/blocks/Hero";
import Content from "./components/blocks/Content";
// import Gallery from "./components/blocks/Gallery";
// import Footer from "./components/Footer";

import Text from "./components/ui/Text";
import H4 from "./components/ui/H4";
import H5 from "./components/ui/H5";

// const questLog = [
//   {
//     id: 1,
//     title: "Local Weather App",
//     description:
//       "Local Weather App is a web application that provides real-time weather information based on the user's location. It utilizes the OpenWeatherMap API to fetch current weather data, including temperature, humidity, wind speed, and weather conditions. The app features a user-friendly interface with responsive design, allowing users to easily access weather information on various devices. Users can also search for weather conditions in different cities around the world. The Local Weather App is built using HTML, CSS, and JavaScript, making it a lightweight and efficient tool for staying informed about the weather.",
//     image: "https://picsum.photos/300/200?random=1",
//     ref: "https://hunafazaky.github.io/local-weather-app",
//   },
//   {
//     id: 2,
//     title: "Project 2",
//     description: "Description of project 2",
//     image: "https://picsum.photos/300/200?random=2",
//     ref: "/",
//   },
//   {
//     id: 3,
//     title: "Project 3",
//     description: "Description of project 3",
//     image: "https://picsum.photos/300/200?random=3",
//     ref: "/",
//   },
// ];
// const achievements = [
//   {
//     id: 1,
//     title: "Achievements 1",
//     description: "Description of Achievements 1",
//     image: "https://picsum.photos/300/200?random=4",
//   },
//   {
//     id: 2,
//     title: "Achievements 2",
//     description: "Description of Achievements 2",
//     image: "https://picsum.photos/300/200?random=5",
//   },
//   {
//     id: 3,
//     title: "Achievements 3",
//     description: "Description of Achievements 3",
//     image: "https://picsum.photos/300/200?random=6",
//   },
// ];

function App() {
  return (
    <div>
      <Navbar
        menus={[
          "Status",
          "Academy",
          "Skills",
          "EXP",
          "Mission",
          // "Items",
          "Achievements",
        ]}
      />
      <Hero />
      <Content title="Status">
        <Text>
          Web Developer with a strong focus on secure and maintainable
          engineering. My primary expertise lies in the MEVN stack (MongoDB,
          Express.js, Vue.js, Node.js). I build reliable RESTful APIs with a
          strict emphasis on system security, specifically handling password
          hashing, JWTs, and secure session/token management.
        </Text>
        <Text>
          Beyond my core stack, I have practical experience with PHP, Python,
          and SQL. To continuously improve application stability and code
          predictability, I am currently integrating TypeScript and React into
          my development workflow. I am open to new roles where I can deliver
          clean, scalable solutions.
        </Text>
      </Content>
      <Content title="Academy">
        <div className="mb-4">
          <H4>UIN Sunan Gunung Djati</H4>
          <H5>
            Bandung
            <span className="opacity-60"> [Bachelor of Engineering]</span>
          </H5>
        </div>
        <Text>
          Web Developer with a strong focus on secure and maintainable
          engineering. My primary expertise lies in the MEVN stack (MongoDB,
          Express.js, Vue.js, Node.js). I build reliable RESTful APIs with a
          strict emphasis on system security, specifically handling password
          hashing, JWTs, and secure session/token management.
        </Text>
        <Text>
          Beyond my core stack, I have practical experience with PHP, Python,
          and SQL. To continuously improve application stability and code
          predictability, I am currently integrating TypeScript and React into
          my development workflow. I am open to new roles where I can deliver
          clean, scalable solutions.
        </Text>
      </Content>
      <Content title="Skills">
        <ul className="text-xs">
          <li>
            <div className="text-brand-rise">Languages:</div>
            <div className="mb-2">
              JavaScript (ES6+), Python, PHP, SQL, HTML5, CSS3
            </div>
          </li>
          <li>
            <div className="text-brand-rise">Frameworks & Libraries:</div>
            <div className="mb-2">Node.js, Express.js, Vue.js</div>
          </li>
          <li>
            <div className="text-brand-rise">Databases:</div>
            <div className="mb-2">MongoDB, MySQL</div>
          </li>
          <li>
            <div className="text-brand-rise">Architecture & Security:</div>
            <div className="mb-2">
              RESTful APIs, JWT Authentication, Session Management, Password
              Hashing
            </div>
          </li>
          <li>
            <div className="text-brand-rise">Developer Tools:</div>
            <div className="mb-2">Git, Postman</div>
          </li>
          <li>
            <div className="text-brand-rise">Currently Learning:</div>
            <div className="mb-2">React, TypeScript, Docker</div>
          </li>
        </ul>
      </Content>
      {/* <Gallery title="Items" items={questLog} />
      <Gallery title="Achievements" items={achievements} />
      <Footer /> */}
    </div>
  );
}

export default App;
