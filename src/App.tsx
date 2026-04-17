// import './App.css'
import Navbar from "./components/blocks/Navbar";
import Hero from "./components/blocks/Hero";
import Content from "./components/blocks/Content";
// import Gallery from "./components/blocks/Gallery";
// import Footer from "./components/Footer";

import Text from "./components/ui/Text";
import H4 from "./components/ui/H4";
import H5 from "./components/ui/H5";
import H6 from "./components/ui/H6";
import List from "./components/ui/List";

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
        menus={["Profile", "Lore", "Skills", "Mission", "Achievements"]}
      />
      <Hero />
      <Content title="Profile">
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
      <Content title="Lore">
        <section className="mb-4">
          <H4>Quest</H4>
          <div className="mb-4">
            <H5>
              <div className="text-brand-forest">PT Orion Media Solusi</div>
              <div>Frontend Developer [Freelance]</div>
            </H5>
            <Text className="opacity-60">June 2021 - January 2022</Text>
            <Text>
              Developed and delivered a functional Vue.js web application
              integrated with REST APIs and Firebase, ensuring all core features
              and UI/UX requirements were met. Built responsive web interfaces
              using Vue.js based on provided UI/UX designs.
            </Text>
            <div className="text-xs flex flex-col gap-2">
              <List>
                Integrated external RESTful APIs to process and display
                interactive visual components.
              </List>
              <List>
                Developed complete CRUD operations with form validation to
                handle user input dynamically.
              </List>
              <List>
                Implemented Role-Based Access Control (RBAC) to manage user
                permissions and feature access.
              </List>
              <List>
                Connected the application to Firebase to enable real-time data
                synchronization.
              </List>
              <List>
                Debugged Ul rendering issues and optimized elements to improve
                application load times.
              </List>
              <List>
                Worked closely with designers and back-end developers to ensure
                the final product aligned with the initial specifications.
              </List>
            </div>
          </div>
          <div className="mb-4">
            <H5>
              <div className="text-brand-forest">Timbang Nganggur</div>
              <div>Web Developer [Internship]</div>
            </H5>
            <Text className="opacity-60">May 2021 - August 2021</Text>
            <Text>
              Contributed to the ongoing development and improvement of an
              existing web application, focusing primarily on new UI/UX
              implementations and code quality enhancements.
            </Text>
            <div className="text-xs flex flex-col gap-2">
              <List>
                Applied updated design specifications to modernize the
                application's interface and ensure responsiveness across
                devices.
              </List>
              <List>
                Translated interface designs and mockups into functional code
                utilizing CSS and PHP within the Laravel framework.
              </List>
              <List>
                Refactored legacy code base to improve overall structure,
                consistency, and readability for future maintenance.
              </List>
              <List>
                Worked closely with fellow developers and designers to ensure
                the final implementation met both technical standards and
                aesthetic requirements.
              </List>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <H4>Academy</H4>
          <div className="mb-4">
            <H5>
              <div className="text-brand-forest">UIN Sunan Gunung Djati</div>
              <div>Bachelor of Engineering</div>
            </H5>
            <Text className="opacity-60">August 2018 - July 2025</Text>
            <Text>
              Developed a solid technical background through comprehensive
              coursework in Data Structures, Algorithms, Database Systems, and
              Web Development. Culminated my studies by integrating Artificial
              Intelligence concepts into a final project: Application of
              Collaborative Filtering and Naive Bayes Algorithm as a
              Recommendation System on a Reading Platform.
            </Text>
          </div>
        </section>
      </Content>
      <Content title="Skills">
        <div className="text-xs flex flex-col gap-2">
          <List>
            <div className="text-brand-rise font-bold">Language:</div>
            <div>JavaScript (ES6+), Python, PHP, SQL, HTML5, CSS3</div>
          </List>
          <List>
            <div className="text-brand-rise font-bold">
              Frameworks & Libraries:
            </div>
            <div>Node.js, Express.js, Vue.js</div>
          </List>
          <List>
            <div className="text-brand-rise font-bold">Databases:</div>
            <div>MongoDB, MySQL</div>
          </List>

          <List>
            <div className="text-brand-rise font-bold">
              Architecture & Security:
            </div>
            <div>
              RESTful APIs, JWT Authentication, Session Management, Password
              Hashing
            </div>
          </List>
          <List>
            <div className="text-brand-rise font-bold">Developer Tools:</div>
            <div>Git, Postman</div>
          </List>
          <List>
            <div className="text-brand-rise font-bold">Currently Learning:</div>
            <div>React, TypeScript, Docker</div>
          </List>
        </div>
      </Content>

      {/* <Gallery title="Items" items={questLog} />
      <Gallery title="Achievements" items={achievements} />
      <Footer /> */}
    </div>
  );
}

export default App;
