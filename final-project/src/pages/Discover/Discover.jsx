import Hero from "../../components/Hero/Hero";
import Item from "../../components/Item/Item";
import Seller from "../../components/Seller/Seller";

import styles from "./Discover.module.css";
import { Link } from 'react-router-dom';

function Discover() {
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


  ];

  const your_items = [
    {
      id: 1,
      cover: "../../../public/strokes.jpg",
      artist: "The Strokes",
      album: "Is This It",
      distance: "2016",
      price: "$20",
    },
    {
      id: 2,
      cover: "../../../public/automatic.jpg",
      artist: "The Strokes",
      album: "Automatic Stop",
      distance: "2017",
      price: "$50",
    },
    {
      id: 3,
      cover: "../../../public/future.jpg",
      artist: "The Strokes",
      album: "Future Present",
      distance: "2018",
      price: "$30",
    },
    {
      id: 4,
      cover: "../../../shirt.jpg",
      artist: "The Strokes",
      album: "The Strokes T-Shirt",
      distance: "2020",
      price: "$40",
    },


  ];

  const sellers = [
    {
      id: 1,
      avatar: "../../../public/img1.png",
      name: "Abby Griffith",
      distance: "1.2 mi",
      type: "Private Seller",
    },
    {
      id: 2,
      avatar: "../../../public/img2.png",
      name: "Jordan Holmes",
      distance: "1.2 mi",
      type: "Private Seller",
    },
    {
      id: 3,
      avatar: "../../../public/img3.png",
      name: "Kathy Smith",
      distance: "1.2 mi",
      type: "Private Seller",
    },
    {
      id: 4,
      avatar: "../../../public/img4.png",
      name: "Greg Caulfield",
      distance: "1.2 mi",
      type: "Private Seller",
    },
  ];




  return (
    <>


      <div className={styles["hero"]}>
        <div className={styles["hero__bg"]}></div>
        <div className={styles["hero__content"]}>
          <h1 className={styles["hero__content-title"]}>
            Discover
          </h1>
          <h3 className={styles["hero__content-subtitle"]} >
            Discover new and featured music merchandise in stores near you

          </h3>

        </div>
      </div>

      <div className={styles["home__content"]}>

        <div className={styles["home__content-section"]}>
          <div className={styles["home__content-title"]}>
            <h2 data-aos="fade-right">Top suggestions from your Spotify account</h2>

          </div>
          <div className={styles["home__content-list"]} >
            {items.map((item, index) => (
              <div
                key={item}
                data-aos="fade-up"
                data-aos-delay={index * 200} // Increase delay for each item
              >
                <Link to={`/item/${item.id}`}>
                <Item item={item} />
                </Link>
              </div>
            ))}
          </div>

          <div className={styles["home__content-title"]}>
            <h2 data-aos="fade-right">Because you listened to The Strokes</h2>

          </div>

          <div className={styles["home__content-list"]} >
            {your_items.map((item, index) => (
              <div
                key={item}
                data-aos="fade-up"
                data-aos-delay={index * 200} // Increase delay for each item
              >
                <Link to={`/item/${item.id}`}>
                <Item item={item} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles["home__content-section"]}>
          <div className={styles["home__content-title"]}>
            <h2 data-aos="fade-right">Featured sellers near you</h2>

          </div>
          <div className={styles["home__content-list"]} data-aos="fade-up">
            {sellers.map((seller, index) => (
              <div
                key={seller}
                data-aos="fade-up"
                data-aos-delay={index * 200} // Increase delay for each item
              >
                <Seller seller={seller} />
              </div>
            ))}
          </div>
        </div>



      </div>
    </>
  );
}


export default Discover;
