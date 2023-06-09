import { ReactComponent as SearchIcon } from './../assets/icons/search-icon.svg';

const Search = () => {
  return (
    <div className='input-group'>
      <input
        type='text'
        id='search'
        className='search'
        placeholder='Search for a country...'
      />
      <label htmlFor='search'>
        <SearchIcon />
      </label>
    </div>
  );
};
export default Search;
