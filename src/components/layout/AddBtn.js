import React from "react";

function AddBtn() {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large waves-effect waves-light red modal-trigger"
      >
        <i className="material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#add-tech-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AddBtn;
