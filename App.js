import "./styles.css";
import moment from "moment";
import { useState } from "react";

export default function App() {
  const [time, setTime] = useState("");
  function defaultDate(date) {
    setTime(moment().format("YYYY-MM-DD HH:mm:ss"));
    console.log("LAVG Time", time);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <label>Complete</label>
      <input type="checkbox" onClick={() => defaultDate(20231220)}></input>
      {time}
    </div>
  );
}
