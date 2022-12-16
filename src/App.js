// import "./App.css";
import Checkcard from "./components/checkcard/checkcard";
import { useState } from "react";
import Yearcard from "./components/yearcard/yearcard";
function App() {
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const [year3, setYear3] = useState("");

  const [id, setid] = useState("");
  const [bool, setbool] = useState("");

  // var id, bool_y;

  const toggle_year = (a, b) => {
    // id = b;
    // bool = a;
    setid(b);
    setbool(a);
    // console.log(id, bool);
    // console.log(a, b);
  };

  return (
    <div className="App">
      <Checkcard active_year={toggle_year} />
      {/* <button onClick={toggle_year}></button> */}
      {year1}
      {year2}
      {year3}
      {/* <Yearcard id_x={id} bool={bool} h="csds" /> */}
    </div>
  );
}

export default App;
