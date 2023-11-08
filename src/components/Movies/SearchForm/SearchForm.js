import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchForm({ handleSearchClick, searchSettings }) {
  const { pathname } = useLocation();

  const [checkedShort, setCheckedShort] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [placeHolder, setPlaceHolder] = React.useState('введите запрос');
  // const [searchExpression, setSearchExpression] = React.useState('');
  useEffect(() => {
    setCheckedShort(false);
    setSearch('');
  }, [pathname]);

  useEffect(() => {
    if (searchSettings !== null) {
      setSearch(searchSettings.search);
      setCheckedShort(searchSettings.checked);
    }
  }, [searchSettings]);

  const handleChangeCheckbox = () => {
    if (!/^\s*$/.test(search)) {
      handleSearchClick(search, !checkedShort, setSearch);
    } else setPlaceHolder('Пустой запрос. Введите ключевое слово');
    setCheckedShort(!checkedShort);
  };

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (!/^\s*$/.test(search)) {
      handleSearchClick(search, checkedShort);
    } else setPlaceHolder('Пустой запрос. Введите ключевое слово');
  }

  return (
    <div className="search movies__search">
      <form className="search__form">
        <div className="search__bar">
          <input
            id="search"
            type="text"
            name="movie-search"
            placeholder={placeHolder}
            className="search__input"
            required
            onChange={handleChangeSearch}
            value={search}
             />
          <button type="submit" className="search-bttn" onClick={handleClick}></button>
        </div>
        <label className="filter search__filter">
          <input
            type="checkbox"
            className="checkbox"
            checked={checkedShort}
            onChange={handleChangeCheckbox}
            />
          <span className="visible-checkbox"></span>
          <span className="filter__label">Короткометражки</span>
        </label>
      </form>
    </div>

  );
}

export default SearchForm;

SearchForm.propTypes = {
  handleSearchClick: PropTypes.func,
  handleShortClick: PropTypes.func,
  searchSettings: PropTypes.object,
};
