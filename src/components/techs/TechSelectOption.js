import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getTechs } from "../../features/techSlice";
import PropTypes from "prop-types";

function TechSelectOption() {
  const dispatch=useDispatch()
  useEffect(() => {
   dispatch(getTechs());
  }, []);
  const {techs,loading}=useSelector((state)=>state.techs)
  // console.log(techs)
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
// { getTechs, tech: { techs, loading } 
// TechSelectOption.propTypes = {
//   getTechs: PropTypes.func.isRequired,
//   tech: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   tech: state.tech,
// });

export default TechSelectOption;
