import ScrollReveal from "./ScrollReveal";
import ContentList from "../content/ContentList";
import Container from "../container";

export default function Skills() {
  return (
    <Container>
      <ScrollReveal title="Skills" className="sm:w-4/5 lg:w-3/5">
        <ContentList
          list={[
            { Langages: "JavaScript (ES6+), Python, PHP, SQL, HTML5, CSS3" },
            { "Frameworks & Libraries": "Node.js, Express.js, Vue.js" },
            { Databases: "MongoDB, MySQL" },
            {
              "Architecture & Security":
                "RESTful APIs, JWT Authentication, Session Management, Password Hashing",
            },
            { "Developer Tools": "Git, Postman" },
            { "Currently Learning": "React, TypeScript, Docker" },
          ]}
        />
      </ScrollReveal>
    </Container>
  );
}
