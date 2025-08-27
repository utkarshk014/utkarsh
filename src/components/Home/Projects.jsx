import ProjectItem from "./ProjectItem";
import Button from "../../components/Button.jsx";
import i18n from "../../assets/projects/i18n.png";

import sqlagent from "../../assets/projects/sqlagent.png";

import financeAssistant from "../../assets/projects/financeassistant.png";

import catalyst from "../../assets/projects/catalyst.png";

export default function Projects() {
  return (
    <>
      <section id="projects" className="sm:px-16 px-6">
        <h2>Projects</h2>
        <div id="" className="flex flex-wrap gap-12 py-3 px-2 justify-center">
          <ProjectItem
            title={"SQL Database Agent"}
            text="An AI-powered SQL assistant that transforms natural language into executable SQL queries. Built with React, TypeScript, and Tailwind for the frontend, and Python (Flask) with RAG-based techniques for the backend. The system connects to relational databases, interprets user queries through an LLM, generates optimized SQL, and instantly returns results in an interactive interface. Designed with REST APIs for communication, it supports schema-aware reasoning, error handling, and multi-turn context retention, making database exploration fast, intuitive, and developer-friendly."
            githubURL={"https://github.com/utkarshk014/theo-sql-agent-backend"}
            websiteURL={
              "https://www.youtube.com/watch?v=sxI1yOXRh-M&feature=youtu.be"
            }
            initialImage={sqlagent}
            devProgress={"done"}
            tags={[
              "react",
              "typescript",
              "tailwind",
              "python",
              "flask",
              "RAG",
              "restapi",
              "sql",
            ]}
          />
          <ProjectItem
            title={"i18n-lazy"}
            text="An AI-driven npm package that automates translation and localization for web applications. Built with Node.js and TypeScript, it integrates seamlessly into existing projects to detect untranslated strings, generate context-aware translations, and reduce repetitive manual work. i18n-lazy leverages LLMs to support multiple languages with minimal configuration, enabling developers to scale their apps globally without sacrificing code quality or developer experience."
            githubURL={"https://github.com/utkarshk014/i18n-lazy"}
            websiteURL={"https://youtu.be/Dw7Eo8giBWg"}
            initialImage={i18n}
            devProgress={"done"}
            tags={[
              "node.js",
              "typescript",
              "npm",
              "i18n",
              "localization",
              "AI",
            ]}
          />

          <ProjectItem
            title={"– AI Finance Assistant"}
            text="This platform is a personalized AI-powered finance assistant designed to help users learn the stock market, understand investing basics, and build financial literacy. Built with Next.js, React, and Tailwind on the frontend, and integrated with Python/Flask and Google's Gemini API on the backend, Theo delivers conversational, context-aware guidance. It supports multi-turn dialogues by injecting previous conversations, provides real-time market insights, and answers finance-related questions in an accessible way. The project showcases how LLMs can be used to simplify complex financial concepts and create interactive learning experiences for beginners."
            githubURL={"https://github.com/utkarshk014/Theo"}
            websiteURL={
              "https://www.loom.com/share/71a1505e93504dc0960c0d07819e22fa?sid=f728706f-a4eb-4ad2-9055-11619b55917e"
            }
            initialImage={financeAssistant}
            devProgress={"done"}
            tags={[
              "next.js",
              "react",
              "tailwind",
              "python",
              "flask",
              "AI",
              "gemini-api",
              "finance",
            ]}
          />

          <ProjectItem
            title={"Catalyst – Multi-Tenant Project Management System"}
            text="Catalyst is a full-stack project management system built to explore and learn Django, GraphQL, and Apollo Client. It supports multi-tenant architecture with organization-based data isolation, API key authentication, full CRUD for projects and tasks, and a smart priority system that auto-calculates task urgency based on due dates. The backend is powered by Django + GraphQL with PostgreSQL (Neon), while the frontend uses Next.js, TypeScript, shadcn/ui, TailwindCSS, Zustand, and Apollo Client for efficient GraphQL integration. Features include real-time comments with optimistic UI updates, priority badges, form validation with Zod, Dockerized setup, CI/CD with GitHub Actions, and comprehensive documentation. Catalyst showcases clean architecture, modern development practices, and production-ready workflows—even though it was primarily built as a learning project."
            githubURL={"https://github.com/utkarshk014/catalyst"}
            websiteURL={""}
            initialImage={catalyst}
            devProgress={"done"}
            tags={[
              "django",
              "graphql",
              "apollo-client",
              "next.js",
              "typescript",
              "tailwind",
              "zustand",
              "docker",
              "postgresql",
            ]}
          />
        </div>
      </section>
      <div className=" flex justify-center w-[100%] h-16">
        <Button
          content={"Visit my Github"}
          action={() => window.open("https://github.com/utkarshk014/")}
        ></Button>
      </div>
    </>
  );
}
