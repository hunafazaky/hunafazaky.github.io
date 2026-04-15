import bgImage from "../../assets/office-room.jpg";

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`px-12 py-8 bg-brand-solar bg-center text-brand-light text-shadow-brand-dark text-shadow-brand bg-cover h-screen flex flex-col blue-xs`}
    >
      <h1 className="font-pixel sm:text-8xl text-6xl">Hunafa Zaky</h1>
      <h1 className="font-pixel sm:text-4xl text-2xl">
        Web Developer | MEVN Stack | Building Responsive, Secure, and
        Maintainable Web Apps
      </h1>
    </div>
  );
}

export default Hero;
