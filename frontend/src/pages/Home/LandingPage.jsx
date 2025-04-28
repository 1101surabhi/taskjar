import { Element } from "react-scroll";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About"
import Footer from "./Footer"

const LandingPage = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <Navbar />
      <Element name="home"><Hero /></Element>
      <Element name="about"><About /></Element>
      <Element name="contact"><Footer /></Element>
    </div>
  );
};

export default LandingPage ;