import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";
import { deleteLog, setCurrent } from "../../features/logSlice";

function LogItem({log}) {
  // { log, deletetLogs, setCurrent }

  const dispatch = useDispatch()
  const onDelete = () => {
   dispatch(deleteLog(log.id));
    M.toast({ html: `log ${log.id} deleted` });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() =>dispatch(setCurrent(log))}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text"> ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a
          href="#!"
          // onClick={() => deletetLogs(log.id)}
          onClick={onDelete}
          className="secondary-content"
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  // deletetLogs: PropTypes.func.isRequired,
  // setCurrent: PropTypes.func.isRequired,
};

export default LogItem;
