import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";
import { useEffect, useState } from "react";
import axios from "axios";
const Details = () => {
  const [service, setService] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/details/${id}`)
      .then((response) => setService(response));
  }, [id]);
  // console.log(service);
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
          <h3 className="text-white text-xl font-medium">
            Home/Service Details
          </h3>
        </div>
      </div>
      <div className="mt-[100px] gap-6 grid grid-cols-6">
        <div className="col-span-4">
          <img
            className="h-[400px] mb-12 w-full rounded-[10px] bg-gray-200"
            src={service?.data?.img}
            alt=""
          />
          <h3 className="text-[35px] font-bold mb-8">{service?.data?.title}</h3>
          <p className="text-[#737373] leading-[30px]">
            {service?.data?.description}
          </p>
          <div className="grid grid-cols-2 gap-6 ">
            {service?.data?.facility.map((item, idx) => (
              <div
                key={idx}
                className="p-[40px] bg-[#F3F3F3] mt-8 rounded-[10px] border-t-[2px] border-cRed"
              >
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-[#737373] mt-2 leading-[30px]">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-[35px] font-bold mb-8">
            Price ${service?.data?.price}
          </h3>
          <Link to={`/checkout/${id}`}>
            <button className="btn btn-sm bg-cRed text-white text-lg font-semibold w-full h-14 rounded-md">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
