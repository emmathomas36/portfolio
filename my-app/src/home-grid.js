import { personalInfo, techProjectData } from "./data";
import resume from './updated-resume-pdf.pdf'
import ModalDialog from "./modal-dialog";

export const HomeGrid = () => {
    return (
        <div>
            <div className = "content-center bg-gray-200 p-4">
                <h1 className = "w-1/2 text-5xl text-left font-light">{personalInfo[0].name}</h1>
                <div className = "w-1/2 text-right float-right">
                    <a className = "p-4" href = {resume}>Resume</a>
                    <a className = "p-4" href = "https://www.linkedin.com/in/emma-e-thomas">LinkedIn</a>
                    </div>
                <p className = "w-1/2 text-left">
                    {personalInfo[0].personalDescription}
                </p>
            </div>
            <h3 className = "text-3xl text-left font-bold mx-8 p-4">Technical Projects</h3>
            <div class="grid grid-cols-2 gap-10 mx-16 my-8">
                {techProjectData.map((data, key) => {
                    return (
                        <div key = {key} className = "container bg-gray-200 rounded h-80 shadow-lg">
                            <h2 className = "text-2xl font-light p-4">{data.projectName}</h2>
                            <div className = "flex content justify-center">
                                <img src = { data.mainImage} className = "h-56 content-evenly"></img>
                            </div>
                            <ModalDialog/>
                            
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default HomeGrid;