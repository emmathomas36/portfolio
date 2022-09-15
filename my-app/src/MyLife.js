import React from "react";
import { myLife as data } from "./data";
import { Player } from 'video-react'

function SpotifyMatched() {
    return (
      <div>
         <div className = "content-center bg-gray-200 p-4">
                <h1 className = "w-1/2 text-5xl text-left font-light mx-16">RIT MyLife Redesign</h1>
                <p className = "text-left w-3/4 py-4 mx-16">
                    {data.description}
                </p>
                <a href = "/portfolio" className = "w-3/4 p-2 mx-16 bg-gray-400 drop-shadow-md rounded-md">Home</a>
          </div>

           <div className="mx-16 my-8 grid grid-cols-1 place-items-center">
            <div className = "content-evenly">
              <h3 className = "text-3xl text-left font-bold p-4">Design Problem Analysis</h3>
              <p className = "px-4 w-full max-w-4xl">{data.planning.overview}</p>
              <p className = "px-4 w-full max-w-4xl">For more information on the analysis, <a className = "underline" target = "_blank" href = {data.planning.link}>click here</a></p>
              <video className = "p-4 w-full max-w-4xl" controls autoPlay>
                <source src = {data.planning.currentPortal} type = "video/mp4"/>
              </video>
              <h5 className = "text-xl text-left font-bold p-4">Design Problem</h5>
              <p className = "px-4 w-full max-w-4xl">{data.planning.designProblem}</p>
              <h5 className = "text-xl text-left font-bold p-4">Stakeholders</h5>
              <p className = "px-4 w-full max-w-4xl">{data.planning.stakeholders}</p>
            </div>
            <div className = "content-evenly">
              <h3 className = "text-3xl text-left font-bold p-4">Low Fidelity Prototype</h3>
            </div>
            <div className = "content-evenly">
              <h3 className = "text-3xl text-left font-bold p-4">LoFi Evaluation</h3>
            </div>
            <div className = "content-evenly">
              <h3 className = "text-3xl text-left font-bold p-4">High Fidelity Prototype</h3>
            </div>
            <div className = "content-evenly">
              <h3 className = "text-3xl text-left font-bold p-4">HiFi Evaluation</h3>
            </div>

           </div>
      </div>
    );
  }
  
  export default SpotifyMatched;