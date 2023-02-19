import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import PreLoader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

function Logs({ log: { logs, loading }, getLogs }) {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) return <PreLoader />;
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System log</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p>No log yet</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
