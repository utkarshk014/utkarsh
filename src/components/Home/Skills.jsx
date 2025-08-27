import TechItem from "../TechItem.jsx";

import tailwindIcon from "../../assets/icons/tech/Tailwind.png";
import reactIcon from "../../assets/icons/tech/React.png";
import gitIcon from "../../assets/icons/tech/Git.png";
import reactNativeIcon from "../../assets/icons/tech/React Native.png";
import goIcon from "../../assets/icons/tech/Go.png";
import typescriptIcon from "../../assets/icons/tech/typescript.png";
import awsIcon from "../../assets/icons/tech/aws.png";
import postgresIcon from "../../assets/icons/tech/postgresql.png";
import graphqlIcon from "../../assets/icons/tech/graphql.png";
import dockerIcon from "../../assets/icons/tech/docker.png";
import pythonIcon from "../../assets/icons/tech/python.png";

export default function Skills() {
  return (
    <section id="knowledge" className="sm:px-16 px-6 ">
      <h2>Skills</h2>
      <div
        id="skills-container"
        className="px-2 flex flex-wrap gap-3 py-3 justify-center"
      >
        <TechItem name={"Go"} image={goIcon} />
        <TechItem name={"Python"} image={pythonIcon} />
        <TechItem name={"Typescript"} image={typescriptIcon} />
        <TechItem name={"AWS"} image={awsIcon} />
        <TechItem name={"Postgres"} image={postgresIcon} />
        <TechItem name={"Docker"} image={dockerIcon} />
        <TechItem name={"GraphQL"} image={graphqlIcon} />
        <TechItem name={"React"} image={reactIcon} />
        <TechItem
          name={"Tailwind"}
          alternativeTitle={"CSS 2.0"}
          image={tailwindIcon}
        />
        <TechItem name={"React Native"} image={reactNativeIcon} />
        <TechItem name={"GIT"} image={gitIcon} />
      </div>
    </section>
  );
}
