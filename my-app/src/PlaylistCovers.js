import { playlistCovers as data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react"
import resume from './updated-resume-pdf.pdf'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

// import required modules

function PlaylistCovers() {
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
                <h1 className = "py-4 lg:w-1/2 text-5xl text-left font-light">Playlist Covers</h1>
                <p className = "text-left lg:w-3/4 pb-4">
                    {data.description}
                </p>

           </div>
          </div>

          <div className="mx-4 lg:mx-16 my-8 grid grid-cols-1 place-items-center">
          
              <h3 className = "text-3xl text-left font-bold p-4">Process Slide Deck</h3>
              <SliderComponentPlaylist/>
            <div className = "place-items-center w-fit lg:w-1/4">
             <h3 className = "text-3xl text-center font-bold p-4">Animation Video</h3> 
                <video className = "p-4 w-full" controls>
                  <source src = {data.video} type = "video/mp4"/>
                </video>
            </div>

          </div>
      </div>
    );
    
    
}

export default PlaylistCovers

export function SliderComponentPlaylist() {
  return (
      <>
          <Swiper
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper w-full w-3/4  h-auto m-4 lg:m-16 align-middle"
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