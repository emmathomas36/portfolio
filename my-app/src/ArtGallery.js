import React from "react";
import { Gallery as data } from "./data";
import resume from './updated-resume-pdf.pdf'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";


function ArtGallery() {
  window.scrollTo(0, 0);
    return (
      <div>
        <div className = "content-center bg-emerald-500 text-white p-4">
           <div className = "mx-4 lg:mx-16 ">
                <div className = "w-1/2 text-right lg:float-right">
                    <a href = "/portfolio">Home</a>
                    <a className = "p-4" target = "_blank" href = {resume}>Resume</a>
                    <a target = "_blank" href = "https://www.linkedin.com/in/emma-e-thomas">LinkedIn</a>
                </div>
                <h1 className = "py-4 lg:w-1/2 text-5xl text-left font-light">Graphic Translation and Company Identity</h1>
                <p className = "text-left lg:w-3/4 pb-4">
                    {data.description}
                </p>
              </div>
          </div>

          <div className = "grid grid-cols-1 lg:grid-cols-2  mx-4 lg:mx-32 my-8 ">
            {data.art.map((art, key) => {
              return (
                <div className = "container h-116 align-middle p-8" key = {key}>
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
