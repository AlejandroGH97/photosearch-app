import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './SearchBar.css';

function SearchBar({ tagInput, setTagInput }) {
  const navigate = useNavigate();

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (!tagInput) return;
    navigate(`/tag/${tagInput}`);
  };

  return (
    <div className="search-container">
      <h2>Search by tag</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="search"
          value={tagInput}
          onChange={handleTagInputChange}
          placeholder="Enter a tag to search with"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  tagInput: PropTypes.string.isRequired,
  setTagInput: PropTypes.func.isRequired,
};

export default SearchBar;
