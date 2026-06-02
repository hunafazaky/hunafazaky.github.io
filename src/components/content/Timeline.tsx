import ScrollReveal from "./ScrollReveal";
import H4 from "../element/H4";
import Content from "../content/Content";
import ContentList from "../content/ContentList";

const freelanceListPoint = [
  "Integrated external RESTful APIs to process and display interactive visual components.",
  "Developed complete CRUD operations with form validation to handle user input dynamically.",
  "Implemented Role-Based Access Control (RBAC) to manage user permissions and feature access.",
  "Connected the application to Firebase to enable real-time data synchronization.",
  "Debugged Ul rendering issues and optimized elements to improve application load times.",
  "Worked closely with designers and back-end developers to ensure the final product aligned with the initial specifications.",
];

const internListPoint = [
  "Applied updated design specifications to modernize the application's interface and ensure responsiveness across devices.",
  "Translated interface designs and mockups into functional code utilizing CSS and PHP within the Laravel framework.",
  "Refactored legacy code base to improve overall structure, consistency, and readability for future maintenance.",
  "Worked closely with fellow developers and designers to ensure the final implementation met both technical standards and aesthetic requirements.",
];

export default function Timeline() {
  return (
    <ScrollReveal title="Timeline" className="sm:w-4/5 lg:w-3/5 sm:self-end">
      <section className="mb-4">
        <H4>Quest</H4>
        <Content
          title={{
            main: "PT Orion Media Solusi",
            sub: "Frontend Developer [Freelance]",
          }}
          date="June 2021 - January 2022"
          description="Developed and delivered a functional Vue.js web application
              integrated with REST APIs and Firebase, ensuring all core features
              and UI/UX requirements were met. Built responsive web interfaces
              using Vue.js based on provided UI/UX designs."
        />
        <ContentList list={freelanceListPoint} />
        <Content
          title={{
            main: "Timbang Nganggur",
            sub: "Web Developer [Internship]",
          }}
          date="May 2021 - August 2021"
          description="Contributed to the ongoing development and improvement of an
              existing web application, focusing primarily on new UI/UX
              implementations and code quality enhancements."
        />
        <ContentList list={internListPoint} />
      </section>
      <section className="mb-4">
        <H4>Academy</H4>
        <Content
          title={{
            main: "UIN Sunan Gunung Djati",
            sub: "Bachelor of Engineering",
          }}
          date="August 2018 - July 2025"
          description="Developed a solid technical background through comprehensive
              coursework in Data Structures, Algorithms, Database Systems, and
              Web Development. Culminated my studies by integrating Artificial
              Intelligence concepts into a final project: Application of
              Collaborative Filtering and Naive Bayes Algorithm as a
              Recommendation System on a Reading Platform."
        />
      </section>
    </ScrollReveal>
  );
}
