import { useState } from "react";
import { useDispatch } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { addLog } from "../../features/logSlice";
import TechSelectOption from "../techs/TechSelectOption";

function AddLogModal() {
  const dispatch = useDispatch()
  const [message, setMassage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please sellect message and technician" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      dispatch(addLog(newLog));
      M.toast({ html: `add new log by ${tech}` });
      setMassage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={{ modalStyle }}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMassage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tect"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechSelectOption />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Need attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
}

const modalStyle = {
  Width: "75%",
  Height: "75%",
  justifyContent: "center",
  alignItems: "center",
};

// AddLogModal.propTypes = {
//   addLog: PropTypes.func.isRequired,
// };

export default AddLogModal;
