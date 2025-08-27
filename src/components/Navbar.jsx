import { useState } from "react";
import Menu from "../assets/icons/buttons/MenuIcon.jsx";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function openMenu() {
    const menuMobile = document.getElementById("menuMobile");
    if (showMenu) {
      menuMobile.style.display = "none";
    } else {
      menuMobile.style.display = "block";
    }
    setShowMenu(!showMenu);
  }

  return (
    <header className="max-w-[1240px] justify-around flex relative left-0 top-0 py-4 ">
      <div className="overflow-hidden justify-end flex group">
        <a href="\">
          <h1 className="pointer lg:text-[3rem] text-[2.5rem] text-jet max-lg:text-[2rem]">
            Utkarsh Suneela
          </h1>
        </a>
      </div>

      <div className=" px-6 flex justify-between">
        <div className=" overflow-hidden  align-middle max-md:hidden flex ">
          <ul className="flex  text-center items-center gap-1 ">
            <li className="px-3 text-[1.2rem] group hover:bg-jet">
              <HashLink
                className="pointer text-jet group-hover:text-platinum"
                to="\#about"
              >
                About Me
              </HashLink>
            </li>
            <li className="px-3 text-[1.2rem] group hover:bg-jet">
              <HashLink
                className="pointer text-jet group-hover:text-platinum"
                to="\#knowledge"
              >
                Skills
              </HashLink>
            </li>
            <li className="px-3 text-[1.2rem] group hover:bg-jet">
              <HashLink
                className="pointer text-jet group-hover:text-platinum"
                to="\#projects"
              >
                Projects
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center gap-6">
          <div
            className="w-8"
            onClick={() => {
              openMenu();
            }}
          >
            <Menu />
          </div>
        </div>
      </div>

      <div
        id="menuMobile"
        className="overflow-hidden hidden w-full absolute left-0 top-16 align-middle"
      >
        <ul className=" text-right items-center border-y-[1px] border-jet">
          <li className=" px-3 pr-20 text-[1.2rem] group  hover:bg-jet">
            <HashLink
              className=" pointer text-jet group-hover:text-platinum"
              to="\#about"
            >
              About Me
            </HashLink>
          </li>
          <li className=" px-3 pr-20 text-[1.2rem] group  hover:bg-jet">
            <HashLink
              className=" pointer text-jet group-hover:text-platinum"
              to="\#knowledge"
            >
              Skills
            </HashLink>
          </li>
          <li className=" px-3 pr-20 text-[1.2rem] group  hover:bg-jet">
            <HashLink
              className=" pointer text-jet group-hover:text-platinum"
              to="\#projects"
            >
              Projects
            </HashLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
