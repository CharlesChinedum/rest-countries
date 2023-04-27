"use client";
import Link from "next/link";
import { useThemeContext } from "../contexts/Theme";
import Card from "./Card";

import styles from "../styles/Home.module.css";

const Home = ({ country }) => {
  const { theme } = useThemeContext();

  return (
    <main>
      <div
        className={`${
          theme === "White Mode" ? styles.lightBg : styles.darkBG
        } px-7`}
      >
        <div className="w-full justify-center items-center flex flex-wrap gap-16 py-10">
          {country.map((country, index) => (
            <Link href={`/country/${country.name.common}`} key={index}>
              <Card
                name={country.name.common}
                region={country.region}
                population={country.population}
                image={country.flags.svg}
                alt={country.alt}
                capital={country.capital}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
