import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deletetTechs } from "../../features/techSlice";
import M from "materialize-css/dist/js/materialize.min.js";

function TechItem({tech}) {
  // { tech, deletetTechs }
  const dispatch=useDispatch()
  const onDelete = (e) => {
    dispatch(deletetTechs(tech.id));
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
  // deletetTechs: PropTypes.func.isRequired,
};

export default TechItem;
