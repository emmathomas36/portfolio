import { playlistCovers as data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

// import required modules

function PlaylistCovers() {
    return (
      <div>
        <div className = "content-center bg-gray-200 p-4">
                <a href = "/portfolio" className = "float-right p-2 mx-4">Home</a>
                <h1 className = "py-4 w-1/2 text-5xl text-left font-light mx-16">Playlist Covers</h1>
                <p className = "text-left w-3/4 mx-16 pb-4">
                    {data.description}
                </p>
          </div>

          <div className="mx-16 my-8 grid grid-cols-1 place-items-center">
          
              <h3 className = "text-3xl text-left font-bold p-4">Final Process Slide Deck</h3>
              <SliderComponentPlaylist/>
            <div className = "place-items-center w-1/4">
             <h3 className = "text-3xl text-center font-bold p-4">Animation Video</h3> 
                <video className = "p-4 w-full" controls autoPlay>
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