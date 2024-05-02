import About from "./About/About";
import ContactDetails from "./ContactDetails/ContactDetails";
import OurProducts from "./OurProducts/OurProducts";
import OurService from "./OurService/OurService";
import OurTeam from "./OurTeam/OurTeam";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <OurService />
      <ContactDetails />
      <OurProducts />
      <OurTeam/>
    </div>
  );
};  

export default Home;
