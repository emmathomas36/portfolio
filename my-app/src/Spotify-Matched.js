import React from "react";
import { spotifyMatched as data } from "./data";
import resume from './updated-resume-pdf.pdf'

function SpotifyMatched() {
  window.scrollTo(0, 0);
    return (
      <div>
         <div className = "content-center bg-gray-200 p-4">
           <div className = "mx-4 lg:mx-16 ">
                <div className = "w-1/2 text-right lg:float-right">
                    <a href = "/portfolio">Home</a>
                    <a className = "p-4" target = "_blank" href = {resume}>Resume</a>
                    <a target = "_blank" href = "https://www.linkedin.com/in/emma-e-thomas">LinkedIn</a>
                </div>
                <h1 className = "py-4 lg:w-1/2 text-5xl text-left font-light">SpotifyMatched</h1>
                <p className = "text-left lg:w-3/4 pb-4">
                    {data.description}
                </p>

           </div>
          </div>

           <div className="mx-4 lg:mx-16 my-8 grid grid-cols-1 place-items-center">
            <div className = "content-evenly">
              <h3 className = "text-3xl text-left font-bold p-4">Final Product Demo</h3>
              <video className = "p-4 w-full max-w-4xl" controls>
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