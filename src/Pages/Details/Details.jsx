import banner from "../../assets/images/checkout/checkout.png";
const Details = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div
        className="h-[300px] relative flex items-center lg:px-[100px] rounded-[10px] w-full bg-cover bg-no-repeat bg-center"
        style={{
          background: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url(${banner})`,
        }}
      >
        <h3 className="text-[45px] text-white font-bold">Service Details</h3>
        <div className="h-12 w-[300px] bg-cRed flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-[50%]">
          <h3 className="text-white text-xl font-medium">Home/Service Details</h3>
        </div>
      </div>
    </div>
  );
};

export default Details;
