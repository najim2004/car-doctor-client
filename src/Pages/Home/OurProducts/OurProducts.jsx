import star from "../../../assets/icons/star.svg";
import product1 from "../../../assets/images/products/1.png";
import product2 from "../../../assets/images/products/2.png";
import product3 from "../../../assets/images/products/3.png";
import product4 from "../../../assets/images/products/4.png";
import product5 from "../../../assets/images/products/5.png";
import product6 from "../../../assets/images/products/6.png";
const OurProducts = () => {
  return (
    <div className="mt-[100px] max-w-[1140px] mx-auto">
      <div className="flex mb-12 flex-col items-center text-center">
        <p className="text-cRed text-xl font-bold">Popular Products</p>
        <h3 className="my-5 text-[45px] font-bold">Browse Our Products</h3>
        <p className="max-w-[717px] mx-auto text-tGray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
{/* -------------------cards------------------ */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[10px] p-6 border-[1px] text-center border-[#E8E8E8]">
          <div className="w-full h-[214px] flex items-center justify-center rounded-[10px] bg-gray-200">
            <img className="h-[147px] w-[196px]" src={product1} alt="" />
          </div>
          <p className="flex mt-5 justify-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </p>
          <h3 className="text-2xl font-bold my-2 ">this is title</h3>
          <h3 className="text-cRed mx-auto text-center text-xl font-semibold">
            $20.20
          </h3>
        </div>
        <div className="rounded-[10px] p-6 border-[1px] text-center border-[#E8E8E8]">
          <div className="w-full h-[214px] flex items-center justify-center rounded-[10px] bg-gray-200">
            <img className="h-[147px] w-[196px]" src={product2} alt="" />
          </div>
          <p className="flex mt-5 justify-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </p>
          <h3 className="text-2xl font-bold my-2 ">Car Air Filter</h3>
          <h3 className="text-cRed mx-auto text-center text-xl font-semibold">
            $20.20
          </h3>
        </div>
        <div className="rounded-[10px] p-6 border-[1px] text-center border-[#E8E8E8]">
          <div className="w-full h-[214px] flex items-center justify-center rounded-[10px] bg-gray-200">
            <img className="h-[147px] w-[196px]" src={product3} alt="" />
          </div>
          <p className="flex mt-5 justify-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </p>
          <h3 className="text-2xl font-bold my-2 ">Cools Led Light</h3>
          <h3 className="text-cRed mx-auto text-center text-xl font-semibold">
            $20.20
          </h3>
        </div>
        <div className="rounded-[10px] p-6 border-[1px] text-center border-[#E8E8E8]">
          <div className="w-full h-[214px] flex items-center justify-center rounded-[10px] bg-gray-200">
            <img className="h-[147px] w-[196px]" src={product4} alt="" />
          </div>
          <p className="flex mt-5 justify-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </p>
          <h3 className="text-2xl font-bold my-2 ">Cools Led Light</h3>
          <h3 className="text-cRed mx-auto text-center text-xl font-semibold">
            $20.20
          </h3>
        </div>
        <div className="rounded-[10px] p-6 border-[1px] text-center border-[#E8E8E8]">
          <div className="w-full h-[214px] flex items-center justify-center rounded-[10px] bg-gray-200">
            <img className="h-[147px] w-[196px]" src={product5} alt="" />
          </div>
          <p className="flex mt-5 justify-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </p>
          <h3 className="text-2xl font-bold my-2 ">Cools Led Light</h3>
          <h3 className="text-cRed mx-auto text-center text-xl font-semibold">
            $20.20
          </h3>
        </div>
        <div className="rounded-[10px] p-6 border-[1px] text-center border-[#E8E8E8]">
          <div className="w-full h-[214px] flex items-center justify-center rounded-[10px] bg-gray-200">
            <img className="h-[147px] w-[196px]" src={product6} alt="" />
          </div>
          <p className="flex mt-5 justify-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </p>
          <h3 className="text-2xl font-bold my-2 ">Cools Led Light</h3>
          <h3 className="text-cRed mx-auto text-center text-xl font-semibold">
            $20.00
          </h3>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="btn btn-sm h-14 w-[170px] bg-transparent border-cRed text-cRed rounded-[5px] text-xl font-semibold">
          More Services
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
