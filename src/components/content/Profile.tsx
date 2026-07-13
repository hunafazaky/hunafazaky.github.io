import ScrollReveal from "./ScrollReveal";
import Container from "../container";
import Text from "../element/Text";

export default function Profile() {
  return (
    <Container className="grid grid-cols-2">
      <ScrollReveal title="Profile" className="">
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
      </ScrollReveal>
      {/* <div>
        <DotLottieReact
          src="https://lottiefiles.com/free-animation/developer-skills-nMPhWyVkkl"
          loop
          autoplay
        />
      </div> */}
    </Container>
  );
}
