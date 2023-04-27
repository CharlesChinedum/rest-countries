import Link from "next/link";

import LoadingPage from "./loading";
import Home from "./components/Home";

async function getCountryData() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

const HomePage = async () => {
  const countries = await getCountryData();
  return (
    <>
      <Home country={countries} />
    </>
  );
};
export default HomePage;
