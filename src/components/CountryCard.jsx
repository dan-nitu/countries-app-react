import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.name.common}`} className='card'>
      <img src={country.flags.png} alt={country.flags.alt} />

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
    </Link>
  );
};
export default CountryCard;
