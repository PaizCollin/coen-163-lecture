import Hero from "../../components/Hero/Hero";
import Item from "../../components/Item/Item";
import Seller from "../../components/Seller/Seller";

import styles from "./Seller.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Sellers() {
  const { sellerId } = useParams();
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

  const seller = sellers.find((seller) => seller.id === parseInt(sellerId));
  console.log(seller);
  if (!seller) return <div>Seller not found</div>;

  return (
    <>
      <div className={styles["hero"]}>
        <div className={styles["hero__bg"]}></div>
        <div className={styles["hero__content"]}>
          <h1 data-aos="fade-in" className={styles["hero__content-title"]}>
            {seller.name}{" "}
          </h1>
          <h3 data-aos="fade-in" className={styles["hero__content-subtitle"]}>
            {seller.name} has carefully handpicked an exceptional collection
            <br /> of vinyl records that spans genres and eras, catering to
            <br /> both avid collectors and casual music enthusiasts.
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
          <div className={styles["home__content-list"]}>
            {items.map((item, index) => (
              <div
                key={item}
                data-aos="fade-up"
                data-aos-delay={index * 200} // Increase delay for each item
              >
                <Link to={`/item/${item.id}`} key={item.id}>
                  {" "}
                  {/* Changed here */}
                  <Item item={item} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sellers;
