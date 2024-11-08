import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [num, setNum] = useState(0);

  let Add = () => {
    setNum((num) => {
      num++;
      return num;
    });
  };
  let Sub = () => {
    setNum((num) => {
      num--;
      return num;
    });
  };
  let Reset = () => {
    setNum(0);
  };


  return (
    <div className="main_container">
      <h1>Counter App</h1>
      <h2>{num}</h2>
      <div className="btn-div">
        <button onClick={Add} className="btn btn-primary">
          Add
        </button>
        <button onClick={Sub} className="btn btn-success">
          Sub
        </button>
        <button onClick={Reset} className="btn btn-danger">
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
