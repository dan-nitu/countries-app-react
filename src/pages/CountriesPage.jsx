import Search from '../components/Search';
import RegionFilter from '../components/RegionFilter';

import { useState, useEffect } from 'react';

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/all
      `
      );
      const responseData = await response.json();

      setCountries(responseData);
    };

    getCountries();
    console.log(countries[0]);
  }, []);

  return (
    <main>
      <Search />

      <RegionFilter />

      <div className='countries'>
        {countries.map((country) => (
          <div className='card'>
            <img src={country.flags.png} alt='' />

            <div className='content'>
              <h3>{country.name.common}</h3>
              <div>
                <b>Population:</b> {country.population}
              </div>
              <div>
                <b>Region:</b> {country.region}
              </div>
              <div>
                <b>Capital:</b> {country.capital}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </main>
  );
};

export default CountriesPage;
