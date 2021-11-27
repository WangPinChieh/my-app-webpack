import React, {useState} from "react";
import "./App.styl";
import Logo from "./logo.svg";
import LogInput from "./LogInput";
function App() {
  const [data, setData] = useState({logId: 0});
  return (
    <>
    data: {JSON.stringify(data)}
      <div className="header">Hello React!</div>
      <LogInput data={data} onClick={()=>{
        console.log("click");
      }} />
      <input type='button' onClick={()=>{
        setData(Object.assign({}, data, {logId: data.logId + 1}));
      }} value="Increment"/>

    </>
  );
}

export default App;
