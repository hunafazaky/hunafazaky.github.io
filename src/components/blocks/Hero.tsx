import bgImage from "../../assets/office-room.webp";
import H1 from "../ui/H1";
import H2 from "../ui/H2";

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="p-8 bg-brand-dark bg-center bg-cover text-brand-light h-dvh flex flex-col text-shadow-brand-dark text-shadow-bold"
    >
      <H1>Hunafa Zaky</H1>
      <H2>
        Web Developer <br />
        MEVN Stack <br />
        Building Responsive, Secure, and
        Maintainable Web Apps
      </H2>
    </div>
  );
}

export default Hero;
