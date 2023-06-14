import BackButton from '../components/BackButton';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryPage = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const getCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const responseData = await response.json();

      setCountryData(responseData[0]);
    };

    getCountryData();
  }, [name, setCountryData]);

  let { population, region, subregion, tld } = countryData;

  let flag = { name: '', description: '' };
  let countryName;
  let nativeName;

  let capital;
  let languages;
  let currencies;

  let borderCountries = 'No border countries';

  if (JSON.stringify(countryData) !== '{}') {
    flag.image = countryData.flags.png;
    flag.description = countryData.flags.alt;

    countryName = countryData.name.common;
    nativeName = countryData.altSpellings[1];

    capital = Object.keys(countryData.capital).map((key, index) => (
      <span key={countryData.capital[key]}> {countryData.capital[key]} </span>
    ));

    currencies = Object.keys(countryData.currencies).map((key, index) => (
      <span key={countryData.currencies[key].name}>
        {countryData.currencies[key].name}
      </span>
    ));

    languages = Object.keys(countryData.languages).map((key, index) => (
      <span key={countryData.languages[key]}>{countryData.languages[key]}</span>
    ));

    if (countryData.borders !== undefined) {
      borderCountries = Object.keys(countryData.borders).map((key, index) => (
        <div key={countryData.borders[key]}> {countryData.borders[key]} </div>
      ));
    }
  }

  if (JSON.stringify(countryData) !== '{}') {
    return (
      <main className='country-details'>
        <BackButton />

        <div className='data'>
          <div>
            <img src={flag.image} alt={flag.description} />
          </div>

          <div>
            <h2>{countryName}</h2>

            <div>
              <div>
                <p>
                  <b>Native Name: </b> {nativeName}
                </p>
                <p>
                  <b>Population: </b> {population}
                </p>
                <p>
                  <b>Region: </b> {region}
                </p>
                <p>
                  <b>Sub Region: </b> {subregion}
                </p>
                <p>
                  <b>Capital: </b> {capital}
                </p>
              </div>

              <div>
                <p>
                  <b>Top Level Domain: </b> {tld}
                </p>
                <p>
                  <b>Currencies: </b> {currencies}
                </p>
                <p>
                  <b>Languages:</b> {languages}
                </p>
              </div>
            </div>

            <div className='borders'>
              <h4>Border Countries:</h4>
              <div className='border-countries'>{borderCountries}</div>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default CountryPage;
