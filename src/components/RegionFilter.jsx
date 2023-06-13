const RegionFilter = ({ region, filterByRegion }) => {
  const handleRegion = (e) => {
    filterByRegion(e.target.value);
  };

  return (
    <select name='region' id='region' onChange={handleRegion} value={region}>
      <option value='' disabled>
        Filter by Region
      </option>

      <option value='africa'>Africa</option>
      <option value='america'>America</option>
      <option value='asia'>Asia</option>
      <option value='europe'>Europe</option>
      <option value='oceania'>Oceania</option>
    </select>
  );
};
export default RegionFilter;
