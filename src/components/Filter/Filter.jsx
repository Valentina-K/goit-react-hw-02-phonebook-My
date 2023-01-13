const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
};

export default Filter;
