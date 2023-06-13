import Search from '../components/Search';
import RegionFilter from '../components/RegionFilter';

import CountryCard from '../components/CountryCard';

import { useState, useEffect } from 'react';

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const responseData = await response.json();

      setCountries(responseData);
    };

    getCountries();
  }, []);

  const searchByName = async (name) => {
    if (name.trim() !== '') {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const responseData = await response.json();

      setCountries(responseData);
    }
  };

  const filterByRegion = async (region) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const responseData = await response.json();

    setCountries(responseData);
  };

  return (
    <main>
      <Search searchByName={searchByName} />

      <RegionFilter filterByRegion={filterByRegion} />

      <div className='countries'>
        {countries.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </main>
  );
};

export default CountriesPage;
