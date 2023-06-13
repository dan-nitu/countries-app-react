import { ReactComponent as SearchIcon } from './../assets/icons/search-icon.svg';

const Search = ({ searchByName }) => {
  const handleSearch = (e) => {
    searchByName(e.target.value);
  };

  return (
    <div className='input-group'>
      <input
        type='text'
        id='search'
        className='search'
        placeholder='Search for a country...'
        onChange={handleSearch}
      />
      <label htmlFor='search'>
        <SearchIcon />
      </label>
    </div>
  );
};
export default Search;
