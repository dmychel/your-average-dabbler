import styles from "/styles/gallery.module.scss";
import PropTypes from "prop-types";

export default function Gallery(arr) {
  const array = arr.arr;
  return (
    <div className={styles.gallery}>
      <div>
        {array.map((object, index) => (
          <img
            key={index}
            src={`${object.link}/${object.picture}`}
            alt="error fetching image"
          />
        ))}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  arr: PropTypes.array,
};
