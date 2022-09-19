import React from "react";
import { Gallery as data } from "./data";
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";


function ArtGallery() {
    return (
      <div>
        <div className = "content-center bg-gray-200 p-4">
                <a href = "/portfolio" className = "float-right p-2 mx-4 bg-gray-400 drop-shadow-md rounded-md">Home</a>
                <h1 className = "py-4 w-1/2 text-5xl text-left font-light mx-16">Art Gallery</h1>
                <p className = "text-left w-3/4 mx-16 pb-4">
                    {data.description}
                </p>
          </div>

          <div className = "grid grid-cols-2 gap-20 mx-24 my-8">
            {data.art.map((art, key) => {
              return (
                <div className = "container h-116 bg-gray-200 rounded shadow-lg align-middle p-8" key = {key}>
                  <div className = "flex content justify-center ">
                    <img className = "w-3/4 h-3/4 content-evenly" src = {art.image}></img>
                  </div>
                  <p className = "text-center font-bold">{art.caption}</p>
                  <p className = "text-center">{art.description}</p>
                </div>
              );
            })}
          </div>

      </div>
    );
    
    
}

export default ArtGallery;
