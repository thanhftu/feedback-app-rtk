import { useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <TechListModal />
        <AddTechModal />
        <Logs />
      </div>
    </>
  );
}

export default App;
