"use client";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type="text"
        id="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
