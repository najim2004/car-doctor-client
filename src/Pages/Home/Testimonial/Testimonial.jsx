import quts from "../../../assets/icons/quote 1.svg";
import star from "../../../assets/icons/star.svg"
const Testimonial = () => {
  return (
    <div className="mt-[100px] max-w-[1140px] mx-auto">
      <div className="flex mb-12 flex-col items-center text-center">
        <p className="text-cRed text-xl font-bold">Testimonial</p>
        <h3 className="my-5 text-[45px] font-bold">What Customer Says</h3>
        <p className="max-w-[717px] mx-auto text-tGray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-60 lg:grid-cols-2">
        <div className="h-[350px] border-[1px] rounded-[10px] border-[#F3F3F3] p-[50px] ">
          <div className="flex justify-between mb-5">
            <div className="flex gap-5">
              <img
                className="size-[60px] rounded-full bg-gray-300"
                src=""
                alt=""
              />
              <div className="">
                <h3 className="text-2xl font-bold">Awlad Hossain</h3>
                <p className="text-xl font-semibold text-[#737373] mt-2">
                  Businessman
                </p>
              </div>
            </div>
            <img src={quts} alt="" />
          </div>
          <p className="text-[#737373] leading-[30px] mb-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div className="flex">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
        <div className="h-[350px] border-[1px] rounded-[10px] border-[#F3F3F3] p-[50px] ">
          <div className="flex justify-between mb-5">
            <div className="flex gap-5">
              <img
                className="size-[60px] rounded-full bg-gray-300"
                src=""
                alt=""
              />
              <div className="">
                <h3 className="text-2xl font-bold">Awlad Hossain</h3>
                <p className="text-xl font-semibold text-[#737373] mt-2">
                  Businessman
                </p>
              </div>
            </div>
            <img src={quts} alt="" />
          </div>
          <p className="text-[#737373] leading-[30px] mb-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div className="flex">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
