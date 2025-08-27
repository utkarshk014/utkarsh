import GithubIcon from "../../assets/icons/contact/Github.jsx";
import LinkedinIcon from "../../assets/icons/contact/Linkedin.jsx";
import EmailIcon from "../../assets/icons/contact/Email.jsx";
import CustomToolTip from "../CustomToolTip.jsx";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <>
      <div className="flex max-lg:flex-col-reverse max-lg:px-10 max-lg:pt-0 flex-row-reverse items-center justify-around px-16 py-16">
        <motion.div
          initial={{ opacity: 0, x: -165 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ amount: "some", once: "true" }}
          className="space-y-1 text-center "
        >
          <p>Hello, I&apos;m</p>
          <h1 className="max-lg:text-[2rem]">Utkarsh Suneela</h1>
          <div className="flex justify-center gap-2">
            <p>Software Engineer |</p>
            <CustomToolTip
              text={
                <>
                  Implementing <strike>bugs</strike> features!
                </>
              }
            >
              <p>programmer </p>
            </CustomToolTip>
          </div>
          <div
            style={{ marginTop: "10px" }}
            className="flex justify-between items-center"
          >
            <GithubIcon
              action={() => window.open("https://github.com/utkarshk014")}
            />
            <EmailIcon
              action={() => window.open("mailto:utkarshsuneela@gmail.com")}
            />
            <LinkedinIcon
              action={() =>
                window.open(
                  "https://www.linkedin.com/in/utkarsh-suneela-a65b12246/"
                )
              }
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 165 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ amount: "some", once: "true" }}
          className="sm:w-[400px] w-[80vw]"
        >
          <img src="./src/assets/images/profile.png" alt="Profile" />
        </motion.div>
      </div>
    </>
  );
}
