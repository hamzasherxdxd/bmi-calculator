import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Bmi from "./components/Bmi";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });
  return (
    <div className="App">
      <div className="header">
        <Bmi />
      </div>
    </div>
  );
}

export default App;
