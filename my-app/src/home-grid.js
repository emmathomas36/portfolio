import { personalInfo, techProjectData } from "./data";
import resume from './updated-resume-pdf.pdf'
import React from 'react';
import { Link } from "react-router-dom";

function HomeGrid () {
    return (
        <div>
            <div className = "content-center bg-gray-200 py-4">
                <div className = "w-1/2 text-right float-right">
                    <a className = "p-4" target = "_blank" href = {resume}>Resume</a>
                    <a className = "p-4" target = "_blank" href = "https://www.linkedin.com/in/emma-e-thomas">LinkedIn</a>
                </div>
                <h1 className = "w-1/2 text-5xl text-left font-light mx-16 py-4">{personalInfo[0].name}</h1>
                <p className = "w-1/2 text-left mx-16">
                    {personalInfo[0].personalDescription}
                </p>
            </div>
            <h3 className = "text-3xl text-left font-bold mx-16 pt-8">Technical Projects</h3>
            <div className="grid grid-cols-3 gap-10 mx-16 my-8">
                {techProjectData.map((data, key) => {
                    return (
                        <Link to = {data.link}>
                            <div key = {key} className = "container h-96 bg-gray-200 rounded shadow-lg hover:bg-gray-400 duration-300">
                                <h2 className = "text-2xl text-center font-light p-4">{data.projectName}</h2>                                
                                <div className = "flex content justify-center">
                                    <img src = { data.mainImage} className = "w-5/6 content-evenly my-4"></img>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default HomeGrid;