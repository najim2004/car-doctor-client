import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className="mt-[100px] max-w-[1140px] mx-auto">
      <div className="flex mb-12 flex-col items-center text-center">
        <p className="text-cRed text-xl font-bold">Team</p>
        <h3 className="my-5 text-[45px] font-bold">Meet Our Team</h3>
        <p className="max-w-[717px] mx-auto text-tGray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[10px] p-6 border-[1px] text-center border-[#E8E8E8]">
          <div className="w-full h-[293px] flex items-center justify-center rounded-[10px] bg-gray-200">
            <img className="h-[293px] rounded-[10px] w-full" src="" alt="" />
          </div>
          <h3 className="text-2xl font-bold mt-5 mb-2 ">Car Engine Plug</h3>
          <h3 className="text-[#737373] mb-3 mx-auto text-center text-xl font-semibold">
            Car Engine Plug
          </h3>
          <div className="flex gap-3 text-3xl justify-center">
            <FaFacebook className="text-blue-900" />
            <FaTwitter className="text-blue-400" />
            <FaLinkedin className="text-blue-600" />
            <FaInstagram className="text-orange-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
