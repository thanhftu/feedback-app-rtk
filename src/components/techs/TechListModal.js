import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getTechs } from "../../features/techSlice";
import TechItem from "./TechItem";

function TechListModal() {
  const dispatch=useDispatch()
  
  useEffect(() => {
   dispatch(getTechs());
  }, []);
  const {techs,loading}=useSelector((state)=>state.techs)
  // const fetchTech = async () => {
  //   setIsLoading(true);
  //   const response = await fetch("/techs");
  //   const data = await response.json();
  //   console.log(data);
  //   setTechs(data);
  //   setIsLoading(false);
  // };
  // { tech: { techs, loading }, getTechs }
// console.log(techs)
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

// TechListModal.propTypes = {
//   tech: PropTypes.object.isRequired,
//   getTechs: PropTypes.func.isRequired,
// };
// const mapStateToProps = (state) => ({
//   tech: state.tech,
// });

export default TechListModal;
