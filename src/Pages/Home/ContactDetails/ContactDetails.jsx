import calender from "../../../assets/icons/calender.svg";
import telephone from "../../../assets/icons/telephone.svg";
import location from "../../../assets/icons/location.svg";
const ContactDetails = () => {
  return (
    <div className="max-w-[1140px] mt-[100px] flex items-center justify-between mx-auto px-[73px] rounded-[10px] bg-[#151515] min-h-[250px]">
      <div className="flex items-center gap-7">
        <img src={calender} alt="" />
        <div className="text-white">
          <p className="font-medium">We are open monday-friday</p>
          <p className="mt-2 text-2xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-7">
        <img src={telephone} alt="" />
        <div className="text-white">
          <p className="font-medium">Have a question?</p>
          <p className="mt-2 text-2xl font-bold">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-center gap-7">
        <img src={location} alt="" />
        <div className="text-white">
          <p className="font-medium">Need a repair? our address</p>
          <p className="mt-2 text-2xl font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
