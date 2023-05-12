import CountryCard from "./CountryCard";

import styles from "../../styles/Home.module.css";

async function getCountry(name) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const country = await res.json();
  return country;
}

const CountryPage = async ({ params: { name } }) => {
  const country = await getCountry(name);
  return (
    <>
      <main className={`h-[calc(100vh-3rem)]`}>
        <CountryCard country={country} />
      </main>
    </>
  );
};

export default CountryPage;
