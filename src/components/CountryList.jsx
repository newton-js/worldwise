import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesProvider";

function CountryList() {
  const { cities, isLoading } = useCities();
  console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message={"add your first country by clicking on the map"} />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
      <p>country</p>
    </ul>
  );
}

export default CountryList;
