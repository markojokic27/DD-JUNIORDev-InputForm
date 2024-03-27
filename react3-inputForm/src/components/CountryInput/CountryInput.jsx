import countriesData from "./countries.json";
import classes from "../index.module.css";
import { useContext } from "react";
import { FormContext } from "../../formContext";

const CountryInput = () => {
  const { country, setCountry } = useContext(FormContext);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className={classes.container}>
      <p>Država:</p>
      <select
        value={country}
        onChange={handleCountryChange}
        className={classes.input}
      >
        {countriesData.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};
export default CountryInput;
