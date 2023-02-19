import { useState, useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLog } from "../../actions/logActions";
import TechSelectOption from "../techs/TechSelectOption";

function EditLogModal({ current, updateLog }) {
  const [message, setMassage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setAttention(current.attention);
      setMassage(current.message);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please sellect message and technician" });
    } else {
      const updLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date(),
      };
      updateLog(updLog);
      M.toast({ html: `Log ${current.id} updated by ${tech}` });

      //clear field
      setMassage("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={{ modalStyle }}>
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

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
