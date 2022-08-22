import React from "react";
import data from "./data.json";
import Card from "./Card.js";

console.log(data);
const App = () => {
  return (
    <div className="d-flex">
      <Card {...data[0]} />
      <Card {...data[1]} />
      <Card {...data[2]} />
    </div>
  );
};

export default App;
