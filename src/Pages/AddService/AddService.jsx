import { useContext } from "react";
import { AuthData } from "../../Context/AuthProvider";
import banner from "../../assets/images/checkout/checkout.png";

const AddService = () => {
  const { user, sweetAlert } = useContext(AuthData);

  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      servicename: form.servicename.value,
      serviceimage: form.serviceimage.value,
      serviceprice: form.serviceprice.value,
      servicetype: form.servicetype.value,
      description: form.description.value,
    };
  };
  return (
    <div className="max-w-[1140px] mx-auto">
      <div
        className="h-[300px] relative flex items-center lg:px-[100px] rounded-[10px] w-full bg-cover bg-no-repeat bg-center"
        style={{
          background: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url(${banner})`,
        }}
      >
        <h3 className="text-[45px] text-white font-bold">Add New Service</h3>
        <div className="h-12 w-[300px] bg-cRed flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-[50%]">
          <h3 className="text-white text-xl font-medium">Home/Service</h3>
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
              name="servicename"
              placeholder="Service Name"
            />
          </div>

          <div className="">
            <input
              className="h-12 p-[11px] mt-4 w-full bg-white rounded-[5px]"
              type="text"
              name="serviceimage"
              placeholder="Service Image"
            />
          </div>
          <div className="">
            <input
              className="h-12 p-[11px] mt-4 w-full bg-white rounded-[5px]"
              type="number"
              name="serviceprice"
              placeholder="Service Price"
            />
          </div>
          <div className="">
            <input
              className="h-12 w-full p-[11px] mt-4 bg-white rounded-[5px]"
              type="text"
              name="servicetype"
              placeholder="Service Type"
            />
          </div>
          <div className="lg:col-span-2">
            <textarea
              placeholder="Product Description"
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
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
