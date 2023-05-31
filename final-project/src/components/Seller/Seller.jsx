/* eslint-disable react/prop-types */
import styles from "./seller.module.css";

function Seller({ seller }) {
  console.log(seller);
  return (
    <>
      <div className={styles["seller"]}>
        <div className={styles["seller__image"]}>
          <img
            className={styles["seller__image-cover"]}
            src={seller.avatar}
            alt={seller.name}
          />
        </div>
        <div className={styles["seller__content"]}>
          <h3>{seller.type}</h3>
          <h2>{seller.name}</h2>
        </div>
      </div>
    </>
  );
}

export default Seller;
