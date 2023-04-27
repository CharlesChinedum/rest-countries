"use client";
import Image from "next/image";
import { useThemeContext } from "../contexts/Theme";
import styles from "../styles/Home.module.css";

//icons
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";

const Nav = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <nav
      className={`${
        theme === "White Mode" ? "bg-white" : styles.darkElement
      } py-2`}
    >
      <div className="w-full flex justify-between px-7 md:px-12 py-2">
        <div>
          <p
            className={`${
              theme === "White Mode" ? "text-black" : "text-white"
            } font-bold text-xs md:text-md`}
          >
            Where in the World ?
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={theme === "White Mode" ? light : dark}
              alt="light"
              className="w-4"
            />
            <p
              className={`${
                theme === "White Mode" ? "text-black" : "text-white"
              } cursor-pointer text-xs md:text-md`}
              onClick={() =>
                setTheme((prev) =>
                  prev === "White Mode" ? "Dark Mode" : "White Mode"
                )
              }
            >
              {theme}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
