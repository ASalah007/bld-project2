import React from "react";
import CardList from "./CardList.js";
import styles from "./CardsSection.module.css";

function CardsSection(props) {
  const title = props.title;
  const desc = props.description;
  const data = props.data;
  const parentWidth = props.parentWidth;
  const cardsPerSlide = Math.floor(parentWidth / 200);
  console.log(parentWidth);
  console.log(cardsPerSlide);
  return (
    <div className="p-5">
      <h1 className={styles.title} style={{ marginLeft: 10 }}>
        {title}
      </h1>
      <p className={styles.desc} style={{ marginLeft: 10 }}>
        {desc}
      </p>
      <CardList courses={data} cardsPerSlide={cardsPerSlide} />
    </div>
  );
}

export default CardsSection;
