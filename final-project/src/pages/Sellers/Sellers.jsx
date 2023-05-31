import Hero from "../../components/Hero/Hero";
import Item from "../../components/Item/Item";
import Seller from "../../components/Seller/Seller";

import styles from "./Sellers.module.css";

function Sellers() {
  const items = [
    {
      cover: "../../../public/abbey-road.jpeg",
      artist: "The Beatles",
      album: "Abbey Road",
      distance: "1974",
      price: "$20",
    },
    {
      cover: "../../../public/presley2.jpeg",
      artist: "Elvis Presley",
      album: "Elvis Presley",
      distance: "1951",
      price: "$50",
    },
    {
      cover: "../../../public/led-zeppelin.jpg",
      artist: "Led Zeppelin",
      album: "Led Zeppelin",
      distance: "1985",
      price: "$30",
    },
    {
      cover: "../../../public/the-dark-side-of-the-moon.jpeg",
      artist: "Pink Floyd",
      album: "The Dark Side of the Moon",
      distance: "1983",
      price: "$40",
    },
    {
      cover: "../../../public/kiss.jpeg",
      artist: "KISS",
      album: "Rock And Roll All Over",
      distance: "1979",
      price: "$20",
    },
    {
      cover: "../../../public/strokes.jpg",
      artist: "The Strokes",
      album: "The New Abnormal",
      distance: "2020",
      price: "$50",
    },
    {
      cover: "../../../public/kendrick.jpg",
      artist: "Kendrick Lamar",
      album: "DAMN",
      distance: "2018",
      price: "$30",
    },
    {
      cover: "../../../public/arcticmonkeys.jpg",
      artist: "Arctic Monkeys",
      album: "Worst Nightmare",
      distance: "2014",
      price: "$40",
    },
    {
      cover: "../../../public/abbey-road.jpeg",
      artist: "The Beatles",
      album: "Abbey Road",
      distance: "1.2 mi",
      price: "$20",
    },
    {
      cover: "../../../public/elvis-presley.jpg",
      artist: "Elvis Presley",
      album: "Elvis Presley",
      distance: "6.7 mi",
      price: "$32",
    },
    {
      cover: "../../../public/led-zeppelin.jpg",
      artist: "Led Zeppelin",
      album: "Led Zeppelin",
      distance: "3.4 mi",
      price: "$30",
    },
    {
      cover: "../../../public/presley2.jpeg",
      artist: "Pink Floyd",
      album: "The Dark Side of the Moon",
      distance: "2.1 mi",
      price: "$40",
    },
  ];




  return (
    <>
      <div className={styles["hero"]}>
        <div className={styles["hero__bg"]}></div>
        <div className={styles["hero__content"]}>
          <h1 className={styles["hero__content-title"]}>
            Jimmy Jones Record Shop
          </h1>
          <h3 className={styles["hero__content-subtitle"]} >
            John Doe has carefully handpicked an exceptional collection
            <br /> of vinyl records that spans genres and eras, catering to
            <br /> both avid collectors  and casual music enthusiasts.
          </h3>

        </div>
      </div>

      <div className={styles["home__content"]}>
        <div className={styles["home__content-section"]}>
          <div className={styles["home__content-title"]}>
            <h2 data-aos="fade-right">Current Catalog</h2>
            <div className={styles["button-white-border"]} data-aos="fade-left">
              By Category
            </div>
          </div>
          <div className={styles["home__content-list"]} >
            {items.map((item, index) => (
              <div
                key={item}

              >
                <Item item={item} />
              </div>
            ))}
          </div>
        </div>





      </div>
    </>
  );
}

export default Sellers;
