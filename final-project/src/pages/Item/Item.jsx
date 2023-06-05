import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item() {
  const { itemId } = useParams(); 
  console.log(itemId);
  const items = [
    {
      id: 1,
      cover: "../../../public/abbey-road.jpeg",
      artist: "The Beatles",
      album: "Abbey Road",
      distance: "1974",
      price: "$20",
    },
    {
      id: 2,
      cover: "../../../public/presley2.jpeg",
      artist: "Elvis Presley",
      album: "Elvis Presley",
      distance: "1951",
      price: "$50",
    },
    {
      id: 3,
      cover: "../../../public/led-zeppelin.jpg",
      artist: "Led Zeppelin",
      album: "Led Zeppelin",
      distance: "1985",
      price: "$30",
    },
    {
      id: 4,
      cover: "../../../public/the-dark-side-of-the-moon.jpeg",
      artist: "Pink Floyd",
      album: "The Dark Side of the Moon",
      distance: "1983",
      price: "$40",
    },
    {
      id: 5,
      cover: "../../../public/kiss.jpeg",
      artist: "KISS",
      album: "Rock And Roll All Over",
      distance: "1979",
      price: "$20",
    },
    {
      id: 6,
      cover: "../../../public/strokes.jpg",
      artist: "The Strokes",
      album: "The New Abnormal",
      distance: "2020",
      price: "$50",
    },
    {
      id: 7,
      cover: "../../../public/kendrick.jpg",
      artist: "Kendrick Lamar",
      album: "DAMN",
      distance: "2018",
      price: "$30",
    },
    {
      id: 8,
      cover: "../../../public/arcticmonkeys.jpg",
      artist: "Arctic Monkeys",
      album: "Worst Nightmare",
      distance: "2014",
      price: "$40",
    },
    {
      id: 9,
      cover: "../../../public/abbey-road.jpeg",
      artist: "The Beatles",
      album: "Abbey Road",
      distance: "1.2 mi",
      price: "$20",
    },

  ];
  const item = items.find((item) => item.id === parseInt(itemId));
  console.log(item);
  if (!item) return <div>Item not found</div>;

  return (
    <div className={styles["item"]}>
      <div className={styles["item__content"]}>
        <div className={styles["item__cover-container"]}>
          <img className={styles["item__cover"]} src={item.cover} alt={item.artist} />
        </div>
        <div className={styles["item__details"]}>
          <h2>{item.artist}</h2>
          <h3>{item.album}</h3>
          <p>{item.distance}</p>
          <h4>{item.price}</h4>
          <div className={styles["button-container"]}>
              <button className={styles["button"]}>Find Nearby</button> 
             <button className={styles["button"]}>Other Sellers</button> 
            </div>
        </div>
      </div>

      <div className={styles["item__other-items"]}>
        <h2>Other Albums</h2>
        <div className={styles["grid-container"]}>
        <div className={styles["other-items__grid"]}>
          {items
            .filter((otherItem) => otherItem.id !== item.id)
            .map((otherItem) => (
              <div key={otherItem.id} className={styles["other-item__container"]}>
                <Link to={`/item/${otherItem.id}`}>
                  <img className={styles["other-item__cover"]} src={otherItem.cover} alt={otherItem.artist} />
                  <div>{otherItem.artist}</div>
                </Link>
              </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
