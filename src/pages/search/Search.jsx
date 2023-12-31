import React, { useState } from "react";

import Nav from "../../components/browse/Nav";
import SearchResult from "../../components/search/SearchResult";
import "./Search.css";
import { useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [genre, setGenre] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");

  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
  };
  const handleChangeMediaType = (event) => {
    setMediaType(event.target.value);
  };
  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleSearch = () => {
    setQuery({
      keyword: searchInput,
      genreId: genre,
      mediaType: mediaType,
      language: language,
      year: year,
    });
  };

  const resetSearch = () => {
    setQuery("");
    setSearchInput("");
    setGenre("");
    setMediaType("");
    setLanguage("");
    setYear("");
  };

  return (
    <div className="app">
      <Nav />
      <div className="s009">
        <form>
          <div className="inner-form">
            <div className="basic-search">
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Type Keywords"
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                />
                <div className="icon-wrap">
                  <svg
                    className="svg-inline--fa fa-search fa-w-16"
                    fill="#ccc"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </div>
              </div>
              <div className="select-filter">
                <select
                  onChange={handleChangeGenre}
                  name="genreId"
                  placeholder="Genre"
                  value={genre}
                >
                  <option value="">Select Genre</option>
                  <option value={28}>Action</option>
                  <option value={35}>Comedy</option>
                  <option value={27}>Horror</option>
                  <option value={10749}>Romance</option>
                  <option value={99}>Documentaries</option>
                </select>
                <select
                  onChange={handleChangeMediaType}
                  name="mediaType"
                  placeholder="Media Type"
                  value={mediaType}
                >
                  <option value="">Select Media Type</option>
                  <option value="movie">Movie</option>
                  <option value="tv">TV</option>
                  <option value="person">Person</option>
                </select>
                <select
                  onChange={handleChangeLanguage}
                  name="language"
                  placeholder="language"
                  value={language}
                >
                  <option value="">Select Language</option>
                  <option value="en">English</option>
                  <option value="ja">Japan</option>
                  <option value="ko">Korea</option>
                </select>
                <select
                  onChange={handleChangeYear}
                  name="year"
                  placeholder="Year"
                  value={year}
                >
                  <option value="">Select Year</option>
                  <option value={2022}>2022</option>
                  <option value={2021}>2021</option>
                  <option value={2020}>2020</option>
                </select>
              </div>
            </div>
            <div className="advance-search">
              <div className="row third">
                <div className="input-field">
                  <div className="result-count"></div>
                  <div className="group-btn">
                    <button
                      className="btn-delete"
                      onClick={resetSearch}
                      type="button"
                    >
                      RESET
                    </button>
                    <button
                      className="btn-search"
                      type="button"
                      onClick={() => handleSearch()}
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <SearchResult query={query} />
    </div>
  );
};

export default Search;
