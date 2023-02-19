import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import TechItem from "./TechItem";
import PropTypes from "prop-types";

function TechListModal({ tech: { techs, loading }, getTechs }) {
  useEffect(() => {
    getTechs();
  }, []);
  // const fetchTech = async () => {
  //   setIsLoading(true);
  //   const response = await fetch("/techs");
  //   const data = await response.json();
  //   console.log(data);
  //   setTechs(data);
  //   setIsLoading(false);
  // };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} />)}
        </ul>
      </div>
    </div>
  );
}

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
