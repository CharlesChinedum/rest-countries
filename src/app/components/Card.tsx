"use client";
import Image from "next/image";

//Context
import { useThemeContext } from "../contexts/Theme";

//styles
import styles from "../styles/Home.module.css";

interface Props {
  name: string;
  // capital: string;
  region: string;
  population: number;
  image: string;
  alt: string;
  capital: any;
}

interface Theme {
  theme: string;
}

const Card = ({ name, region, population, image, alt, capital }: Props) => {
  const { theme } = useThemeContext() as Theme;
  // console.log(capital);

  return (
    <div className="w-[16rem] h-full  hover:scale-105 cursor-pointer">
      <div className="w-full flex flex-col">
        <div>
          <Image
            src={image}
            alt={"image of " + alt}
            object-fit="contain"
            width={300}
            height={300}
            className="h-40 object-cover rounded-t-lg"
          />
        </div>
        <div
          className={`${
            theme === "White Mode"
              ? "bg-white shadow-gray-300"
              : styles.darkElement
          } px-3 pt-2 pb-12 flex flex-col gap-3 rounded-b-lg shadow-md`}
        >
          <h1
            className={`${
              theme === "White Mode" ? styles.lightText : "text-white"
            } text-lg font-bold`}
          >
            {name}
          </h1>

          <div className="text-sm tracking-wide">
            <p>
              <span
                className={`${
                  theme === "White Mode" ? styles.lightText : "text-white"
                } font-bold`}
              >
                Population:
              </span>{" "}
              <span
                className={`${
                  theme === "White Mode" ? styles.lightText : "text-gray-300"
                }`}
              >
                {population}{" "}
              </span>
            </p>
            <p>
              <span
                className={`${
                  theme === "White Mode" ? styles.lightText : "text-white"
                } font-bold`}
              >
                Region:
              </span>{" "}
              <span
                className={`${
                  theme === "White Mode" ? styles.lightText : "text-gray-300"
                }`}
              >
                {region}{" "}
              </span>
            </p>
            <p>
              {/* Capital:{" "}
              {capital.map((capital, index) => (
                <li key={index}>{capital}</li>
              ))}{" "} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
