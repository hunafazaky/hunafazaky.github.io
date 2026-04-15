import bgImage from "../../assets/office-room.webp";
import H1 from "../ui/H1";
import H2 from "../ui/H2";

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`px-12 py-8 bg-brand-solar bg-center text-brand-light text-shadow-lg bg-cover h-screen flex flex-col blue-xs`}
    >
      <H1>Hunafa Zaky</H1>
      <H2>
        Web Developer - MEVN Stack - Building Responsive, Secure, and
        Maintainable Web Apps
      </H2>
    </div>
  );
}

export default Hero;
