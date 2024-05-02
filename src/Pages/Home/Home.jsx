import About from "./About/About";
import ContactDetails from "./ContactDetails/ContactDetails";
import OurProducts from "./OurProducts/OurProducts";
import OurService from "./OurService/OurService";
import OurTeam from "./OurTeam/OurTeam";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <OurService />
      <ContactDetails />
      <OurProducts />
      <OurTeam />
      <WhyChooseUs />
      <Testimonial />
    </div>
  );
};

export default Home;
