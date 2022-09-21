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
        <div className = "content-center bg-gray-200 p-4">
                <div className = "w-1/2 text-right float-right">
                    <a href = "/portfolio" className = "p-4 ">Home</a>
                    <a className = "p-4" target = "_blank" href = {resume}>Resume</a>
                    <a className = "p-4" target = "_blank" href = "https://www.linkedin.com/in/emma-e-thomas">LinkedIn</a>
                </div>
                
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
