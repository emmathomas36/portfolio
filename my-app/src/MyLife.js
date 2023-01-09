import React from "react";
import { myLife as data } from "./data";
import resume from './resume-1-08.pdf'
import { Link } from "react-router-dom";

function MyLife() {
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
                <h1 className = "py-4 lg:w-1/2 text-5xl text-left font-display">RIT MyLife Redesign</h1>
                <p className = "text-left lg:w-3/4 pb-4">
                    {data.description}
                </p>

           </div>
          </div>

           <div className="mx-4 lg:mx-16 my-8 grid grid-cols-1 place-items-center">
            
              <div className = "content-evenly">
                <h3 className = "text-3xl text-left font-bold p-4">Design Problem Analysis</h3>
                <p className = "px-4 w-full max-w-4xl">{data.planning.overview}</p>
                <p className = "px-4 w-full max-w-4xl">For more information on the analysis, visit the <a href ="https://emmathomas36.github.io/iste264group7/" className = 'underline' target = '_blank'>GitHub pages link.</a></p>
                <video className = "p-4 w-full max-w-4xl" controls >
                  <source src = {data.planning.currentPortal} type = "video/mp4"/>
                </video>
                <h5 className = "text-xl text-left font-bold p-4">Design Problem</h5>
                <p className = "px-4 w-full max-w-4xl">{data.planning.designProblem}</p>
                <h5 className = "text-xl text-left font-bold p-4">Stakeholders</h5>
                <p className = "px-4 w-full max-w-4xl">{data.planning.stakeholders}</p>
              </div>

              <div>
                <h3 className = "text-3xl text-left font-bold p-4">Low Fidelity Prototype</h3>
                <p className = "px-4 w-full max-w-4xl">{data.lofi.description}</p>
                <img className = "p-4 w-full max-w-4xl" src = {data.lofi.oldFlow}></img>
                <p className = "px-4 w-full max-w-4xl">New Flow:</p>
                <img className = "p-4 w-full max-w-4xl" src = {data.lofi.newFlow}></img>
                <p className = "px-4 w-full max-w-4xl">Here is a snapshot of a section of our Lofi Figma file. The full file can he accessed <a className = "underline" target = "_blank" href = {data.lofi.figma}>here</a></p>
                <img className = "p-4 w-full max-w-4xl" src = {data.lofi.image}></img>
              </div>

              <div>
                <h3 className = "text-3xl text-left font-bold p-4">LoFi Evaluation</h3>
                <h5 className = "text-xl text-left font-bold p-4">Method</h5>
                <p className = "px-4 w-full max-w-4xl">{data.lofiTest.method}</p>
                
                <h5 className = "text-xl text-left font-bold p-4">Findings and Improvements</h5>
                <p className = "px-4 w-full max-w-4xl">{data.lofiTest.findings}</p>
                <p className = "px-4 w-full max-w-4xl my-2">{data.lofiTest.improvements}</p>
              </div>
              <div>
                <h3 className = "text-3xl text-left font-bold p-4">High Fidelity Prototype</h3>
                <p className = "px-4 w-full max-w-4xl">{data.hifi.description}<a href = {data.hifi.link} target = "_blank" className = "underline" >here</a></p>
                <video className = "p-4 w-full max-w-4xl" controls>
                  <source src = {data.hifi.video} type = "video/mp4"/>
                </video>
              </div>
              <div>
                <h3 className = "text-3xl text-left font-bold p-4">HiFi Evaluation</h3>
                <h5 className = "text-xl text-left font-bold p-4">Method</h5>
                <p className = "px-4 w-full max-w-4xl">{data.hifiTest.overview}</p>
                <div>

                </div>
                
                <h5 className = "text-xl text-left font-bold p-4">Findings</h5>
                <p className = "px-4 w-full max-w-4xl">{data.hifiTest.findings}</p>
              </div>

           </div>
      </div>
    );
  }
  
  export default MyLife;