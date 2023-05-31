/* eslint-disable react/prop-types */
import styles from "./Item.module.css";

function Item({ item }) {
  console.log(item);
  return (
    <>
      <div className={styles["item"]}>
        <div className={styles["item__image"]}>
          <img
            className={styles["item__image-cover"]}
            src={item.cover}
            alt={item.album}
          />
          <img
            className={styles["item__image-icon"]}
            src="../../../public/menu.svg"
            alt=""
          />
        </div>
        <div className={styles["item__content"]}>
          <div className={styles["item__content-left"]}>
            <h3>{item.artist}</h3>
            <h2>{item.album}</h2>
          </div>
          <div className={styles["item__content-right"]}>
            <h3>{item.distance}</h3>
            <h3>{item.price}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
