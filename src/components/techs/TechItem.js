import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

import { deletetTechs } from "../../actions/techActions";
function TechItem({ tech, deletetTechs }) {
  const onDelete = (e) => {
    deletetTechs(tech.id);
    M.toast({ html: `technician ${tech.firstName} ${tech.lastName} deleted` });
  };
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deletetTechs: PropTypes.func.isRequired,
};

export default connect(null, { deletetTechs })(TechItem);
