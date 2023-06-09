const RegionFilter = () => {
  return (
    <select name='region' id='region'>
      <option value='' disabled selected>
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
