import { motion } from "framer-motion";
import CustomToolTip from "../CustomToolTip";

export default function About() {
  function salvarClipboard(e) {
    let contact = e.target.innerHTML;

    navigator.clipboard
      .writeText(contact)
      .then(() => {
        return true;
      })
      .catch((err) => console.log("err:", err));
  }
  return (
    <motion.section
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      viewport={{ amount: "some", once: true }}
      className="sm:px-16 px-6"
      id="about"
    >
      <h2>About</h2>
      <div className="px-2">
        <p className="sm:text-[1.3em] text-[1.1rem] text-left py-2">
          I’m <strong>Utkarsh Suneela</strong>, a{" "}
          <strong>Fullstack Developer</strong> who enjoys building{" "}
          <strong>intuitive interfaces</strong>,{" "}
          <strong>fast & scalable systems</strong>, and{" "}
          <strong>AI-driven tools</strong>. I thrive in{" "}
          <strong>fast-paced environments</strong>, take ownership from ideation
          to deployment.
        </p>
        <p className="sm:text-[1.3em] text-[1.1rem] text-left py-2">
          Currently, I’m working as a{" "}
          <strong>Software Engineer at Postship (InstaSell)</strong>, where I
          build fullstack Shopify applications. My work spans{" "}
          <strong>frontend development</strong> with React, Next.js, Redux, and
          Tailwind, to <strong>backend systems</strong> in Go and Node.js,
          deployed on AWS. I’ve also designed{" "}
          <strong>scalable data pipelines, recommendation systems</strong>, and
          <strong> payment workflows</strong>. I love constantly learning and
          experimenting with new technologies.
        </p>
        <span className="flex flex-wrap items-center">
          <p className="sm:text-[1.3em] text-[1.1rem] text-left py-2">
            Reach me at<strong> email: </strong>
          </p>
          <CustomToolTip text={"Click to copy"} textAction={"Copied!"}>
            <span
              className="sm:text-[1.3em] text-[1.1rem] underline cursor-pointer"
              onClick={(e) => salvarClipboard(e)}
            >
              utkarshsuneela@gmail.com
            </span>
          </CustomToolTip>
        </span>
      </div>
    </motion.section>
  );
}
