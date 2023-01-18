type Props = {
  setTagFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = (set: Props) => {
  const handleChange = (e: { preventDefault: () => void; target: any; }) => {
    set.setTagFilter(e.target.value);
  };

  return (
    <div className='filter'>
        <form className="form-filter">
          <label>Filter Tags: </label>
          <select onChange={handleChange}>
            <option value="all">All</option>
            <option value="crime">Crime</option>
            <option value="history">History</option>
            <option value="french">French</option>
            <option value="english">English</option>
            <option value="love">Love</option>
          </select>
        </form>
    </div>
  );
};

export default Filter;
