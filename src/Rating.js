import styles from "./Rating.module.css";
import utils from "./utils.js";

const Rating = (props) => {
  const ratingCount = props.ratingCount;
  const studentsCount = props.studentsCount;
  const { rating, star, students } = styles;

  console.log(typeof ratingCount);
  return (
    <div className="d-flex align-items-center ">
      <span className={rating}>{ratingCount.toFixed(1)}</span>

      {utils.range(Math.floor(ratingCount)).map((i) => (
        <img key={i} className={star} src="/star.png" alt="star" />
      ))}

      {ratingCount - Math.floor(ratingCount) > 0 && (
        <img className={star} src="/half-star.png" alt="star" />
      )}

      <span className={students}>
        {"(" + utils.formatCount(studentsCount) + ")"}
      </span>
    </div>
  );
};

export default Rating;
