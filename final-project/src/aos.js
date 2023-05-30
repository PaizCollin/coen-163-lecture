import AOS from "aos";
import "aos/dist/aos.css";

const initAOS = () => {
  AOS.init({
    duration: 1000,
    offset: 100,
  });
};

export default initAOS;
