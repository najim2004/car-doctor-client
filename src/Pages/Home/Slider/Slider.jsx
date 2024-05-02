import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slidee1 from "../../../assets/images/banner/1.jpg";
import slidee2 from "../../../assets/images/banner/2.jpg";
import slidee3 from "../../../assets/images/banner/3.jpg";
import slidee4 from "../../../assets/images/banner/4.jpg";
import slidee5 from "../../../assets/images/banner/5.jpg";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const Slider = () => {
  return (
    <div className="max-w-[1140px] mt-10 h-[600px] mx-auto relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop= "true"
        navigation={{
            nextEl: ".next-btn",
            prevEl: ".pre-btn",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-[10px] z-10"
      >
        <SwiperSlide>
          <div
            className="w-full bg-cover bg-no-repeat bg-center h-[600px]
        "
            style={{ backgroundImage: `url(${slidee1})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-cover bg-no-repeat bg-center h-[600px]
        "
            style={{ backgroundImage: `url(${slidee2})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-cover bg-no-repeat bg-center h-[600px]
        "
            style={{ backgroundImage: `url(${slidee3})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-cover bg-no-repeat bg-center h-[600px]
        "
            style={{ backgroundImage: `url(${slidee4})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-cover bg-no-repeat bg-center h-[600px]
        "
            style={{ backgroundImage: `url(${slidee5})` }}
          ></div>
        </SwiperSlide>
      </Swiper>
      <div
        className="inset-0 rounded-[10px] flex flex-col justify-center z-40 absolute px-[100px]"
        style={{
          background:
            "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)",
        }}
      >
        <h3 className="max-w-[463px] text-center lg:text-start text-[60px] font-bold leading-[75px] text-white">
          Affordable Price For Car Servicing
        </h3>
        <p className="max-w-[522px] text-white my-7">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="flex gap-5">
          <button className="w-[170px] h-14 rounded-[5px] text-white text-lg font-semibold btn btn-sm bg-cRed">
            Discover More
          </button>
          <button className="w-[170px] h-14 rounded-[5px] text-white text-lg font-semibold btn btn-sm bg-transparent border-[1px] border-white">
            Latest Project
          </button>
          <div className="absolute right-12 bottom-12 z-50 flex gap-5">
            <button className="btn bg-[#ffffff67] rounded-full pre-btn hover:bg-cRed text-white font-bold">
              <GoArrowLeft />
            </button>
            <button className="btn bg-[#ffffff67] rounded-full next-btn hover:bg-cRed text-white font-bold">
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
