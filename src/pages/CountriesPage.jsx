import Search from '../components/Search';
import RegionFilter from '../components/RegionFilter';

import CountryCard from '../components/CountryCard';

import { useState, useEffect } from 'react';

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const responseData = await response.json();

      setCountries(responseData);
    };

    getCountries();
  }, []);

  const searchByName = async (name) => {
    setName(name);
    setRegion('');

    if (name.trim() !== '') {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );

      if (response.status !== 404) {
        const responseData = await response.json();
        setCountries(responseData);
      }
    }
  };

  const filterByRegion = async (region) => {
    setRegion(region);
    setName('');

    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const responseData = await response.json();

    setCountries(responseData);
  };

  return (
    <main>
      <Search name={name} searchByName={searchByName} />

      <RegionFilter region={region} filterByRegion={filterByRegion} />

      <div className='countries'>
        {countries.map((country) => (
          <CountryCard country={country} key={country.name.common} />
        ))}
      </div>
    </main>
  );
};

export default CountriesPage;
