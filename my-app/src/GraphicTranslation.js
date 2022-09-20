import React from "react";
import { translation as data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";


function GraphicTranslation() {
    return (
      <div>
        <div className = "content-center bg-gray-200 p-4">
                <a href = "/portfolio" className = "float-right p-2 mx-4">Home</a>
                <h1 className = "py-4 w-1/2 text-5xl text-left font-light mx-16">Graphic Translation and Logo Design</h1>
                <p className = "text-left w-3/4 mx-16 pb-4">
                    {data.description}
                </p>
          </div>

          <SliderComponent/>

      </div>
    );
    
    
}
export default GraphicTranslation;


export function SliderComponent() {
  return (
      <>
          <Swiper
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper w-3/4  h-auto m-16 align-middle"
              loop={true}
          >

            {data.slides.map((slides, key) => {
              return (
                <SwiperSlide key = {key}>

                  <div className = "h-auto">
                    <img
                        className="w-full content-center"
                        src={slides}
                        alt="image slide 1"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
      </>
  );
}