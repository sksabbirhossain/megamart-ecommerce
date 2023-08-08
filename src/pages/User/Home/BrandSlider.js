import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { ContainerHeader } from "../../../components/user/ContainerHeader";

export const BrandSlider = () => {
  return (
    <div className="container mx-auto">
      <ContainerHeader title="Populer Brands" />
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full h-[200px]"
      >
        <SwiperSlide>
          <img
            src="https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.syte.ai/wp-content/uploads/2021/04/image-search-1.jpg"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://www.syte.ai/wp-content/uploads/2021/04/image-search-1.jpg"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://www.syte.ai/wp-content/uploads/2021/04/image-search-1.jpg"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/firmbee-com-ememmpuojlw-unsplash_3-sixteen_nine.jpg?VersionId=1F3teBXsGzGG_OGSWNb_nEx3srvIri6O&size=690:388"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
