import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from "axios";
import { useState } from "react";
const Booking = () => {
  const bookingsData = useLoaderData();
  const [bookings, setBookings] = useState(bookingsData.data);
  const handleDelate = (id) => {
    axios
      .delete(`http://localhost:5000/bookings/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount > 0) {
          setBookings(bookingsData.filter((bookings) => bookings._id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
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
      <div className="mt-[100px]">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              {/* row 1 */}
              {bookings?.map((booking) => (
                <tr key={booking._id} className="text-xl font-semibold">
                  <th>
                    <IoMdCloseCircleOutline
                      onClick={() => handleDelate(booking._id)}
                      className="size-10"
                    />
                  </th>
                  <td>
                    <img
                      className="size-[150px] rounded-[10px] bg-gray-200"
                      src={booking.serviceimage}
                      alt=""
                    />
                  </td>
                  <td>{booking.title}</td>
                  <td>{booking.price}</td>
                  <td>{booking.date}</td>
                  <td>
                    <button className="btn btn-sm w-[120px] h-12 rounded-[10px] bg-cRed text-white">
                      Pending
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booking;
