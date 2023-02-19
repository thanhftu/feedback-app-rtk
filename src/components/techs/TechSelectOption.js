import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";

function TechSelectOption({ getTechs, tech: { techs, loading } }) {
  useEffect(() => {
    getTechs();
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map((tech) => (
      <option key={tech.id}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
}

TechSelectOption.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOption);
