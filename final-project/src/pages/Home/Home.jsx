import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Item from "../../components/Item/Item";
import Seller from "../../components/Seller/Seller";
import styles from "./Home.module.css";

function Home() {
  const items = [
    {
      id: 1,
      cover: "../../../public/abbey-road.jpeg",
      artist: "The Beatles",
      album: "Abbey Road",
      distance: "1.2 mi",
      price: "$20",
    },
    {
      id: 2,
      cover: "../../../public/elvis-presley.jpg",
      artist: "Elvis Presley",
      album: "Elvis Presley",
      distance: "6.7 mi",
      price: "$50",
    },
    {
      id: 3,
      cover: "../../../public/led-zeppelin.jpg",
      artist: "Led Zeppelin",
      album: "Led Zeppelin",
      distance: "3.4 mi",
      price: "$30",
    },
    {
      id: 4,
      cover: "../../../public/the-dark-side-of-the-moon.jpeg",
      artist: "Pink Floyd",
      album: "The Dark Side of the Moon",
      distance: "2.1 mi",
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
      <div className={styles["home__header-search"]}>
        <Hero />
      </div>

      <div className={styles["home__content"]}>
        <div className={styles["home__content-section"]}>
          <div className={styles["home__content-title"]}>
            <h2 data-aos="fade-right">Featured Records</h2>
            <div className={styles["button-white-border"]} data-aos="fade-left">
              View All
            </div>
          </div>
          <div className={styles["home__content-list"]} data-aos="fade-up">
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
        </div>

        <div className={styles["home__content-section"]}>
          <div className={styles["home__content-title"]}>
            <h2 data-aos="fade-right">Featured Sellers</h2>
            <div className={styles["button-white-border"]} data-aos="fade-left">
              View All
            </div>
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

        <div className={styles["home__content-section"]}>
          <div className={styles["home__content-title"]}>
            <h2 data-aos="fade-right">Discover Local Collections</h2>
            <div className={styles["button-white-border"]} data-aos="fade-left">
              View All
            </div>
          </div>

          <div className={styles["home__content-discover"]}>
            <div className={styles["home__content-discover-group"]}>
              <div
                className={styles["home__content-discover-item-sm"]}
                data-aos="fade-up"
              >
                <img src="../../../public/rock.jpg" alt="rock" />
                <h3>Rock</h3>
              </div>

              <div
                className={styles["home__content-discover-item-sm"]}
                data-aos="fade-up"
              >
                <img src="../../../public/classical.jpg" alt="classical" />
                <h3>Classical</h3>
              </div>

              <div
                className={styles["home__content-discover-item-lg"]}
                data-aos="fade-up"
              >
                <img src="../../../public/rap.jpg" alt="rap" />
                <h3>Rap</h3>
              </div>
            </div>

            <div className={styles["home__content-discover-group"]}>
              <div
                className={styles["home__content-discover-item-lg"]}
                data-aos="fade-up"
              >
                <img src="../../../public/r&b.jpg" alt="r & b" />
                <h3>R&B</h3>
              </div>

              <div
                className={styles["home__content-discover-item-sm"]}
                data-aos="fade-up"
              >
                <img src="../../../public/country.jpg" alt="country" />
                <h3>Country</h3>
              </div>

              <div
                className={styles["home__content-discover-item-sm"]}
                data-aos="fade-up"
              >
                <img src="../../../public/jazz.png" alt="jazz" />
                <h3>Jazz</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
