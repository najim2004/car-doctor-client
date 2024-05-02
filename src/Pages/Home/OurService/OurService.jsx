import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const OurService = () => {
  const [services, setService] = useState();
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="max-w-[1140px] mt-[100px] mx-auto">
      <div className="flex mb-12 flex-col items-center text-center">
        <p className="text-cRed text-xl font-bold">Service</p>
        <h3 className="my-5 text-[45px] font-bold">Our Service Area</h3>
        <p className="max-w-[717px] mx-auto text-tGray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      {/*------------------------------ card div ----------------------------*/}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <div
            key={service._id}
            className="rounded-[10px] p-6 border-[1px] border-[#E8E8E8]"
          >
            <img
              className="w-full h-[208px] rounded-[10px] bg-gray-200"
              src={services.img}
              alt=""
            />
            <h3 className="text-2xl font-bold my-5 ">{service.title}</h3>
            <div className="!text-cRed flex justify-between !text-xl font-semibold">
              <h3>Price: ${service.price}</h3>
              <Link to={`/details/${service._id}`}>
                <button className="btn !text-cRed !text-xl btn-sm bg-transparent hover:bg-transparent border-none shadow-none !p-0">
                  <GoArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="btn btn-sm h-14 w-[170px] bg-transparent border-cRed text-cRed rounded-[5px] text-xl font-semibold">
          More Services
        </button>
      </div>
    </div>
  );
};

export default OurService;
