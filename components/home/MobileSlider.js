import productImgOne from "../../public/image-product-1.jpg";
import productImgTwo from "../../public/image-product-2.jpg";
import productImgThree from "../../public/image-product-3.jpg";
import productImgFour from "../../public/image-product-4.jpg";
import Image from "next/image";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const MobileSlider = () => {
  return (
    <Swiper
      loop={true}
      navigation={true}
      className="mySwiper h-[300px] sm:h-[400px] md:hidden"
      modules={[Navigation]}
    >
      <SwiperSlide>
        <Image src={productImgOne} alt="product image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={productImgTwo} alt="product image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={productImgThree} alt="product image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={productImgFour} alt="product image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MobileSlider;
