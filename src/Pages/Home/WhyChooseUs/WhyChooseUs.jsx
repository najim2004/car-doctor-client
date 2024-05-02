import team from "../../../assets/icons/group.svg";
import delivery from "../../../assets/icons/deliveryt.svg";
import clock from "../../../assets/icons/Group 38729.svg";
import help from "../../../assets/icons/person.svg";
import equip from "../../../assets/icons/Wrench.svg";
import guranty from "../../../assets/icons/check.svg";

const WhyChooseUs = () => {
  return (
    <div className="mt-[100px] max-w-[1140px] mx-auto">
      <div className="flex mb-12 flex-col items-center text-center">
        <p className="text-cRed text-xl font-bold">Core Features</p>
        <h3 className="my-5 text-[45px] font-bold">Why Choose Us</h3>
        <p className="max-w-[717px] mx-auto text-tGray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-6 md:grid-cols-3">
        <div className="h-[156px] border-[1px] border-[#E8E8E8] rounded-[10px] flex flex-col items-center justify-center gap-5">
          <img src={team} alt="" />
          <p className="text-lg font-bold">Expert Team</p>
        </div>
        <div className="h-[156px] text-white bg-cRed border-[1px] border-[#E8E8E8] rounded-[10px] flex flex-col items-center justify-center gap-5">
          <img src={clock} alt="" />
          <p className="text-lg font-bold">Timely Delivery</p>
        </div>
        <div className="h-[156px] border-[1px] border-[#E8E8E8] rounded-[10px] flex flex-col items-center justify-center gap-5">
          <img src={help} alt="" />
          <p className="text-lg font-bold">24/7 Support</p>
        </div>
        <div className="h-[156px] border-[1px] border-[#E8E8E8] rounded-[10px] flex flex-col items-center justify-center gap-5">
          <img src={equip} alt="" />
          <p className="text-lg font-bold">Best Equipment</p>
        </div>
        <div className="h-[156px] border-[1px] border-[#E8E8E8] rounded-[10px] flex flex-col items-center justify-center gap-5">
          <img src={guranty} alt="" />
          <p className="text-lg font-bold">100% Guranty</p>
        </div>
        <div className="h-[156px] border-[1px] border-[#E8E8E8] rounded-[10px] flex flex-col items-center justify-center gap-5">
          <img src={delivery} alt="" />
          <p className="text-lg font-bold">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
