"use client";
import Link from "next/link";
import Image from "next/image";

import { useThemeContext } from "../../contexts/Theme";

import styles from "../../styles/Home.module.css";

const CountryCard = ({ country }) => {
  const { theme } = useThemeContext();

  const currency = Object.keys(country[0].currencies);
  const language = Object.keys(country[0].languages);
  const nativeName = Object.keys(country[0].name.nativeName);
  const border = country[0].borders;

  //inline styles
  const bigText = "font-semibold text-[0.9rem] text-gray-700 mb-2";
  const smallText = "text-xs text-gray-500";

  return (
    <div>
      <div className="w-full px-12 mt-12">
        <Link href="/">
          <div className="flex gap-2 shadow-gray-300 shadow-sm w-[7rem] items-center justify-center px-3 py-1 rounded-md cursor-pointer">
            {"<- Back"}
          </div>
        </Link>

        <div className="w-full flex flex-col md:flex-row mt-20">
          <div className="flex-1 w-full md:w-[50%]">
            <div className="w-full md:px-10">
              <div className="w-full">
                <Image
                  src={country[0].flags.svg}
                  alt={country[0].flags.alt}
                  width={600}
                  height={600}
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 flex-1 w-[50%]">
            <div className="py-5">
              <h1 className="font-semibold text-[1.5rem]">
                {country[0].name.common}
              </h1>
            </div>
            <div className="flex gap-10">
              <div>
                <p className={bigText}>
                  Population:{" "}
                  <span className={smallText}>{country[0].population}</span>
                </p>
                <p className={bigText}>
                  Region: <span className={smallText}>{country[0].region}</span>
                </p>
                <p className={bigText}>
                  Sub Region:{" "}
                  <span className={smallText}>{country[0].subregion}</span>
                </p>
                <p className={bigText}>
                  Capital:{" "}
                  <span className={smallText}>{country[0].capital[0]}</span>
                </p>
              </div>
              <div>
                <p className={bigText}>
                  Top Level Domain:{" "}
                  <span className={smallText}>{country[0].tld}</span>
                </p>
                <p className={bigText}>
                  Currencies: <span className={smallText}>{currency}</span>
                </p>
                <p className={bigText}>
                  Languages: <span className={smallText}>{language}</span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <p>Border Countries: </p>
                <div className="flex gap-2">
                  {border
                    ? border.map((border, index) => (
                        <div
                          key={index}
                          className="px-4 shadow-gray-300 shadow-sm rounded-sm cursor-pointer hover:shadow-lg"
                        >
                          <span className="text-xs">{border}</span>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
