import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

function SearchBar({ searchLogs }) {
  const text = useRef("");
  const onChange = (e) => {
    searchLogs(text.current.value);
  };

  return (
    <nav>
      <div style={{ marginBottom: "30px" }} className="nav-wrapper blue">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="search logs"
              ref={text}
              onChange={onChange}
            />
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

SearchBar.propType = {
  searchLogs: PropTypes.func.isRequired,
};
export default connect(null, { searchLogs })(SearchBar);
