import { useContext } from "react";
import { AuthData } from "../../Context/AuthProvider";
import banner from "../../assets/images/checkout/checkout.png";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const CheckOut = () => {
  const service = useLoaderData();
  const { user, sweetAlert } = useContext(AuthData);

  console.log(service);
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      first_name: form.first_name.value,
      date: form.date.value,
      number: form.number.value,
      email: form.email.value,
      description: form.description.value,
      price: service?.price,
      user_email: user?.email,
      title: service?.title,
    };
    axios
      .post("http://localhost:5000/bookings", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-[1140px] mx-auto">
      <div
        className="h-[300px] relative flex items-center lg:px-[100px] rounded-[10px] w-full bg-cover bg-no-repeat bg-center"
        style={{
          background: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url(${banner})`,
        }}
      >
        <h3 className="text-[45px] text-white font-bold">Check Out</h3>
        <div className="h-12 w-[300px] bg-cRed flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-[50%]">
          <h3 className="text-white text-xl font-medium">Home/Check Out</h3>
        </div>
      </div>
      <div className="mt-[100px] bg-[#F3F3F3] p-[97px]">
        <form
          onSubmit={handleAddCraft}
          className="grid grid-rows-1 lg:grid-cols-2 gap-6"
        >
          <div className="">
            <input
              className="h-12 p-[11px] mt-4 w-full bg-white rounded-[5px]"
              type="text"
              name="first_name"
              placeholder="First Name"
              required
            />
          </div>

          <div className="">
            <input
              className="h-12 p-[11px] mt-4 w-full bg-white rounded-[5px]"
              type="date"
              name="date"
              required
            />
          </div>
          <div className="">
            <input
              className="h-12 p-[11px] mt-4 w-full bg-white rounded-[5px]"
              type="number"
              name="number"
              placeholder="Your Phone"
              required
            />
          </div>
          <div className="">
            <input
              className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
              type="email"
              name="email"
              value={user?.email}
              disabled
              placeholder="Your Email"
            />
          </div>
          <div className="lg:col-span-2">
            <textarea
              placeholder="Your Message"
              className="h-[250px] w-full p-[11px] mt-4 bg-white rounded-[5px]"
              name="description"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <input
            className="h-12 lg:col-span-2 btn btn-sm !font-normal font-rancho text-2xl text-white bg-cRed w-full  rounded-[5px]"
            type="submit"
            name=""
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
