import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center  items-center gap-6">
      <h6>
        This site does not use cookies
        <Link className="" to="/b-log">
          {" "}
          🍪
        </Link>
        :)
      </h6>
    </footer>
  );
}
