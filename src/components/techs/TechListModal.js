import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";

function TechListModal() {
  const [techs, setTechs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchTech();
  }, []);
  const fetchTech = async () => {
    setIsLoading(true);
    const response = await fetch("/techs");
    const data = await response.json();
    console.log(data);
    setTechs(data);
    setIsLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!isLoading && techs.map((tech) => <TechItem tech={tech} />)}
        </ul>
      </div>
    </div>
  );
}

export default TechListModal;
