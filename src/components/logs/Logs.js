import React, { useEffect, useState } from "react";
import LogItem from "./LogItem";
import PreLoader from "../layout/Preloader";

function Logs() {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchLog();
  }, []);
  const fetchLog = async () => {
    setIsLoading(true);
    const response = await fetch("/logs");
    const data = await response.json();
    console.log(data);
    setLogs(data);
    setIsLoading(false);
  };
  if (isLoading) return <PreLoader />;
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System log</h4>
      </li>
      {!isLoading && logs.length === 0 ? (
        <p>No log yet</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
}

export default Logs;
