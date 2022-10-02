import { personalInfo, techProjectData, designProjectData } from "./data";
import resume from './updated-resume-pdf.pdf'
import React from 'react';
import { Link } from "react-router-dom";

function HomeGrid () {
    return (
        <div>
            <div className = "content-center bg-emerald-500 p-4 text-white shadow-lg">
                <div className = "mx-4 lg:mx-16 ">
                    <div className = "w-1/2 text-right lg:float-right">
                        <a className = "underline" href = "/portfolio">Home</a>
                        <a className = "p-4" target = "_blank" href = {resume}>Resume</a>
                        <a target = "_blank" href = "https://www.linkedin.com/in/emma-e-thomas">LinkedIn</a>
                    </div>
                    <h1 className = "w-fit lg:w-1/2 text-5xl text-left font-display py-4">{personalInfo[0].name}</h1>
                    <p className = "w-fit lg:w-1/2 text-left">
                        {personalInfo[0].personalDescription}
                    </p>
                </div>
            </div>
            <h3 className = "text-3xl text-left font-display  mx-4 lg:mx-16 pt-16">Technical Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2  mx-4 lg:mx-16 my-8">
                {techProjectData.map((data, key) => {
                    return (
                        <Link to = {data.link} className = "w-5/6 container bg-white-200 hover:bg-emerald-300 duration-300">
                            <div className = "p-4" key = {key}>
                                                               
                                <div className = "py-4">
                                    <img src = { data.mainImage} ></img>
                                </div>
                                <h2 className = "text-2xl font-bold ">{data.projectName}</h2> 
                                <p className = "" >{data.description}</p>
                                <p className = "font-bold">{data.course}</p>

                                
                                
                            </div>
                        </Link>
                    );
                })}
            </div>
            {/* <hr className = "mx-16 border-2 border-blue-200"></hr> */}
            <h3 className = "text-3xl text-left font-display mx-4 lg:mx-16 pt-8">Art and Design Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-4 lg:mx-16 my-8">
                {designProjectData.map((data, key) => {
                    return (
                        <Link to = {data.link} className = "w-5/6 container bg-white-200 hover:bg-emerald-300 duration-300">
                        <div className = "p-4" key = {key}>
                                                           
                            <div className = "py-4">
                                <img src = { data.mainImage} ></img>
                            </div>
                            <h2 className = "text-2xl font-bold ">{data.projectName}</h2> 
                            <p className = "" >{data.description}</p>
                            <p className = "font-bold">{data.course}</p>

                            
                            
                        </div>
                    </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default HomeGrid;