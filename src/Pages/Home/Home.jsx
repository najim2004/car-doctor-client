import About from "./About/About";
import ContactDetails from "./ContactDetails/ContactDetails";
import OurProducts from "./OurProducts/OurProducts";
import OurService from "./OurService/OurService";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <OurService />
      <ContactDetails />
      <OurProducts />
    </div>
  );
};

export default Home;
