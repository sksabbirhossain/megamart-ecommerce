import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export const Banner = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay, EffectFade]}
      className="mySwiper h-96"
      loop={true}
      effect={"fade"}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="https://icms-image.slatic.net/images/ims-web/adf3364e-f1a8-4dc8-9140-6fedf54bdb65.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="https://icms-image.slatic.net/images/ims-web/08cb6ccd-b909-4c15-9421-c25b26e73644.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-full object-cover"
          src="https://icms-image.slatic.net/images/ims-web/7de73341-dee6-4793-a51d-367929293352.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};
