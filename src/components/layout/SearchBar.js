import React from "react";

function SearchBar() {
  return (
    <nav>
      <div style={{ marginBottom: "30px" }} className="nav-wrapper blue">
        <form>
          <div className="input-field">
            <input id="search" type="search" />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
