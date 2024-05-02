import aboutPerson from "../../../assets/images/about_us/person.jpg";
import aboutPart from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="mt-[100px] max-w-[1140px] mx-auto gap-[61px] grid grid-cols-1 lg:grid-cols-2">
      <div className="relative w-[521px] h-[554px]">
        <img
          className="max-w-[460px] h-[470px] object-cover object-center rounded-[10px]"
          src={aboutPerson}
          alt=""
        />
        <img
          src={aboutPart}
          alt=""
          className="max-w-[317px] object-cover object-center h-[322px] rounded-[10px] absolute left-[194px] top-[225px] border-[10px] border-white"
        />
      </div>
      <div className="">
        <p className="text-cRed text-xl font-bold">About us</p>
        <h3 className="max-w-[376px] font-bold text-[45px] mt-5">
          We are qualified & of experience in this field
        </h3>
        <p className="leading-6 mt-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="leading-6 mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="w-[170px] h-14 btn btn-sm text-white font-semibold rounded-[5px] border-none bg-cRed mt-6">
            Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
