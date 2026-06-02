import ScrollReveal from "./ScrollReveal";
import ContentList from "../content/ContentList";

export default function Skills() {
  return (
    <ScrollReveal title="Skills" className="sm:w-2/3 sm:pl-24">
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
  );
}
