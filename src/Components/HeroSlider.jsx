import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { heroSlider } from "./heroData";
import { Slider } from "../Styles/E_Commerce_Style";

const HeroSlider = () => {
  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className={Slider.swiper}
      >
        {heroSlider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <AnimatePresence>
              <motion.div
              
               initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={Slider.mainDiv}
                style={{ backgroundImage: `url(${slide.image})` }}>
                <div className={Slider.bgEffect}></div>
                <div className={Slider.mainSlideDiv}>
                  <h1  className={Slider.title}> {slide.title} </h1>
                  <p className={Slider.description}> {slide.description} </p>
                  {/* <Link to={slide.buttonLink }  className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-600 transition" >
                   {slide.buttonText}
                  </Link> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
