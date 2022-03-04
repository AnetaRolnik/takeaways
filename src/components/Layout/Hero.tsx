import heroImage from "../../assets/hero.jpg";
import classes from "./Hero.module.css";

const Hero = () => (
  <img src={heroImage} className={classes["hero-img"]} alt="Takeaways" />
);

export default Hero;
