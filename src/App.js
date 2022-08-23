import React from "react";
import data from "./data.json";
import CardsSection from "./CardsSection";

console.log(data);
const App = () => {
  return (
    <div className="">
      <CardsSection
        title={"Expand your career opportunities with Python"}
        description={
          "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"
        }
        data={data}
        parentWidth={document.body.clientWidth}
      />
    </div>
  );
};

export default App;
