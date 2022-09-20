import React from "react";
import { spotifyMatched as data } from "./data";

function SpotifyMatched() {
    return (
      <div>
         <div className = "content-center bg-gray-200 p-4">
                <a href = "/portfolio" className = "float-right p-2 mx-4">Home</a>
                <h1 className = "py-4 w-1/2 text-5xl text-left font-light mx-16">SpotifyMatched</h1>
                <p className = "text-left w-3/4 mx-16 pb-4">
                    {data.description}
                </p>
          </div>

           <div className="mx-16 my-8 grid grid-cols-1 place-items-center">
            <div className = "content-evenly">
              <h3 className = "text-3xl text-left font-bold p-4">Final Product Demo</h3>
              <video className = "p-4 w-full max-w-4xl" controls autoPlay>
                <source src = {data.video} type = "video/mp4"/>
              </video>
            </div>
            <div>
              <h3 className = "text-3xl text-left font-bold p-4">Figma Mock-up</h3>
              <p className = "px-4 w-full max-w-4xl" >{data.figma.description}</p>
              <img className = "p-4 w-full max-w-4xl" src = {data.figma.image}></img>
            </div>
            <div>
              <h3 className = "text-3xl text-left font-bold p-4">Login Page</h3>
              <p className = "px-4 w-full max-w-4xl"  >{data.login.description}</p>
              <img className = "p-4 w-full max-w-4xl"  src = {data.login.image}></img>
            </div>
            <div> 
              <h3 className = "text-3xl text-left font-bold p-4">Dashboard Page</h3>
              <p className = "px-4 w-full max-w-4xl">{data.dash.description}</p>
              <img className = "p-4 w-full max-w-4xl"  src = {data.dash.image}></img>
            </div>
            <div> 
              <h3 className = "text-3xl text-left font-bold p-4">Match Page</h3>
              <p className = "px-4 w-full max-w-4xl">{data.match.description}</p>
              <img className = "p-4 w-full max-w-4xl"  src = {data.match.image}></img>
            </div>
           </div>
         

      </div>
    );
  }
  
  export default SpotifyMatched;