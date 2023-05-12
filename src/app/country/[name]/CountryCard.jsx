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
  const bigText = "font-semibold text-[0.9rem] mb-2";
  const smallText = "text-xs text-gray-500";

  return (
    <div
      className={`${
        theme === "White Mode" ? "bg-white" : styles.darkBG
      }  h-full `}
    >
      <div className="w-full px-12 pt-12">
        <Link href="/">
          <div
            className={`${
              theme === "White Mode"
                ? "bg-white shadow-gray-300 text-black"
                : styles.darkBG
            } shadow-slate-950  flex gap-2 shadow-sm w-[7rem] items-center justify-center px-3 py-1 rounded-md cursor-pointer`}
          >
            <p>{"< Back"}</p>
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

          <div
            className={` ${
              theme === "White Mode" ? "text-black" : "text-white"
            } flex flex-col gap-3 flex-1 w-[50`}
          >
            <div className="py-5">
              <h1 className="font-semibold text-[1.5rem]">
                {country[0].name.common}
              </h1>
            </div>
            <div className="flex gap-10">
              <div>
                <p
                  className={`${
                    theme === "White Mode" ? "text-gray-600" : "text-gray-200"
                  } ${bigText}`}
                >
                  Population:{" "}
                  <span className={smallText}>{country[0].population}</span>
                </p>
                <p
                  className={`${
                    theme === "White Mode" ? "text-gray-600" : "text-gray-200"
                  } ${bigText}`}
                >
                  Region: <span className={smallText}>{country[0].region}</span>
                </p>
                <p
                  className={`${
                    theme === "White Mode" ? "text-gray-600" : "text-gray-200"
                  } ${bigText}`}
                >
                  Sub Region:{" "}
                  <span className={smallText}>{country[0].subregion}</span>
                </p>
                <p
                  className={`${
                    theme === "White Mode" ? "text-gray-600" : "text-gray-200"
                  } ${bigText}`}
                >
                  Capital:{" "}
                  <span className={smallText}>{country[0].capital[0]}</span>
                </p>
              </div>
              <div>
                <p
                  className={`${
                    theme === "White Mode" ? "text-gray-600" : "text-gray-200"
                  } ${bigText}`}
                >
                  Top Level Domain:{" "}
                  <span className={smallText}>{country[0].tld}</span>
                </p>
                <p
                  className={`${
                    theme === "White Mode" ? "text-gray-600" : "text-gray-200"
                  } ${bigText}`}
                >
                  Currencies: <span className={smallText}>{currency}</span>
                </p>
                <p
                  className={`${
                    theme === "White Mode" ? "text-gray-600" : "text-gray-200"
                  } ${bigText}`}
                >
                  Languages: <span className={smallText}>{language}</span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <p
                  className={`${
                    theme === "White Mode" ? "text-gray-600" : "text-white"
                  } text-sm font-semibold tracking-wide`}
                >
                  Border Countries:{" "}
                </p>
                <div className="flex gap-2">
                  {border
                    ? border.map((border, index) => (
                        <div
                          key={index}
                          className={`${
                            theme === "White Mode"
                              ? "shadow-gray-300"
                              : "shadow-slate-950"
                          }  px-4 shadow-sm rounded-sm cursor-pointer hover:shadow-lg`}
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
