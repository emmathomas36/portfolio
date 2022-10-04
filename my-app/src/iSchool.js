import React from "react";
import { iSchool as data } from "./data";
import resume from './updated-resume-pdf.pdf'

function ISchool() {
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
                  <h1 className = "py-4 lg:w-1/2 text-5xl text-left font-display">iSchool Web App</h1>
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
              <h5 className = "text-xl text-left font-bold p-4">Project Reflections</h5>
              <p className = "px-4 w-full max-w-4xl">{data.completed}</p>
              <p className = "px-4 w-full max-w-4xl">{data.issues}</p>
            </div>
        </div>

      </div>
    );
  }
  
  export default ISchool;