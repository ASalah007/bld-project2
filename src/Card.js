import React from "react";
import styles from "./Card.module.css";
import Rating from "./Rating.js";

const Card = (props) => {
  return (
    <div className={"card " + styles.card}>
      <img
        className={"card-img-top " + styles.cardImg}
        src="https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg"
        alt="#"
      />
      <div className={"card-body " + styles.cardBody}>
        <h6 className={"card-title " + styles.cardTitle}>{props.title}</h6>
        <p className={styles.cardAuthor}>{props.instructor}</p>
        <Rating ratingCount={props.stars} studentsCount={props.students} />
        <div className={styles.cardPrice}>{"$" + props.price}</div>
      </div>
    </div>
  );
};

export default Card;
