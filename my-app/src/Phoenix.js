import React from "react";
import { Phoenix as data } from "./data";
import resume from './emma-thomas-resume.pdf'

function Phoenix() {
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
                  <h1 className = "py-4 lg:w-1/2 text-5xl text-left font-display">Phoenix Mars Lander Interactive Poster</h1>
                  <p className = "text-left lg:w-3/4 pb-4">
                      {data.description}
                  </p>

            </div>
          </div>
         
          <div className="mx-4 lg:mx-16 my-8 grid grid-cols-1 place-items-center">
            
            <div className = "content-evenly">
                <div>
                    <h3 className = "text-3xl text-left font-bold p-4">Research and Sketches</h3>
                    <p className = "px-4 w-full max-w-4xl">{data.sketches.description}</p>
                    <h5 className = "text-xl text-left font-bold p-4">Rough Sketches</h5>
                    <img className = "p-4 w-full max-w-4xl" src = {data.sketches.roughSketch}></img>
                    <h5 className = "text-xl text-left font-bold p-4">Final Sketches</h5>
                    <img className = "p-4 w-full max-w-4xl" src = {data.sketches.finalSketch}></img>
                </div>
            
                <div>
                    <h3 className = "text-3xl text-left font-bold p-4">Final Poster Iterations</h3>
                    <p className = "px-4 w-full max-w-4xl">{data.finalPoster.description}</p>
                    <img className = "p-4 w-full max-w-4xl" src = {data.finalPoster.finalPoster}></img>
                    
                </div>

                <div>
                    <h3 className = "text-3xl text-left font-bold p-4">Poster Progress Work</h3>
                    <p className = "px-4 w-full max-w-4xl">{data.progress.description}</p>
                    <p className = "px-4 w-full max-w-4xl">To see all of the progress iterations, check out the <a target = "_blank" className = "underline" href = "https://www.figma.com/file/7TCK9mrVUnK0dG9D3Cnrha/Space-Poster?node-id=0%3A1&t=4UOPL3C46BgUSpbz-1">Figma File</a></p>
                    <img className = "p-4 w-full max-w-4xl" src = {data.progress.progress}></img>
                </div>

                <div>
                    <h3 className = "text-3xl text-left font-bold p-4">Interaction Demo</h3>
                    <p className = "px-4 w-full max-w-4xl">{data.interactive.description}<a href = "https://www.figma.com/file/7TCK9mrVUnK0dG9D3Cnrha/Space-Poster?node-id=570%3A5497&t=4UOPL3C46BgUSpbz-1" target = "blank" className = "underline">here</a></p>
                    <video className = "p-4 w-full max-w-4xl" controls>  
                        <source src = {data.interactive.interactiveVideo} type = "video/mp4"/>
                    </video>
                </div>

            </div>
        </div>

      </div>
    );
  }
  
  export default Phoenix;