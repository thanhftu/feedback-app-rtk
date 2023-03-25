import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import LogItem from "./LogItem";
import PreLoader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../features/logSlice";

function Logs() {
  // { log: { logs, loading }, getLogs }
  const dispatch=useDispatch()

  useEffect(() => {
   dispatch(getLogs());
  }, []);

  const {logs,loading}=useSelector((state)=>state.logs)
  // console.log(logs)

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

// Logs.propTypes = {
//   log: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//   log: state.log,
// });
export default Logs;
