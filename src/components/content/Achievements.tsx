import ScrollReveal from "./ScrollReveal";
import Gallery from "./Gallery";

const questLog = [
  {
    id: 1,
    title: "Local Weather App",
    description:
      "Local Weather App is a web application that provides real-time weather information based on the user's location. It utilizes the OpenWeatherMap API to fetch current weather data, including temperature, humidity, wind speed, and weather conditions. The app features a user-friendly interface with responsive design, allowing users to easily access weather information on various devices. Users can also search for weather conditions in different cities around the world. The Local Weather App is built using HTML, CSS, and JavaScript, making it a lightweight and efficient tool for staying informed about the weather.",
    image: "https://picsum.photos/300/200?random=1",
    ref: "https://hunafazaky.github.io/local-weather-app",
  },
  {
    id: 2,
    title: "Local Weather App",
    description:
      "Local Weather App is a web application that provides real-time weather information based on the user's location. It utilizes the OpenWeatherMap API to fetch current weather data, including temperature, humidity, wind speed, and weather conditions. The app features a user-friendly interface with responsive design, allowing users to easily access weather information on various devices. Users can also search for weather conditions in different cities around the world. The Local Weather App is built using HTML, CSS, and JavaScript, making it a lightweight and efficient tool for staying informed about the weather.",
    image: "https://picsum.photos/300/200?random=1",
    ref: "https://hunafazaky.github.io/local-weather-app",
  },
];

export default function Achievements() {
  return (
    <ScrollReveal title="Achievements">
      <Gallery items={questLog} />
    </ScrollReveal>
  );
}
