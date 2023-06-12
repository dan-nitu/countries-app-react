const CountryCard = ({ country }) => {
  return (
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
  );
};
export default CountryCard;
