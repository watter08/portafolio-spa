import { useEffect, useState } from 'react'
import { Navbar,  ShapeHeader, Presentation,  EmblaCarousel, CertificateSection, NeumorphicButtons } from '../components/index'
import { PresentationInfo } from '../logic/const/presentation.const';
import { ProjectsWorked } from '../logic/const/projects.const'
import { headers, data } from '../logic/const/certificates.const'
import { skills } from '../logic/const/skills.const'


function HomeView(){
    const [ currentLenguage, setCurrentLenguage ] = useState('ES');
    const [presentation, setPresentation] = useState({});
    const [projects, setProjets] = useState([]);
    const [skillsData, setSkillsData] = useState({});
    const [certificateheaders, setCertificateheaders] = useState([]);
    const [certificateData, setCertificateData] = useState([]);
    const [Options] = useState({ axis: 'y', dragFree: true, direction: 'rtl', loop: true })
    const [ currentTheme, setCurrentTheme ] = useState('SuperMan')


    useEffect(() => {
        if(currentLenguage){
            let newPresentation = presentation;
            newPresentation = PresentationInfo[currentLenguage];
            setPresentation(newPresentation)

            let newProjects = projects;
            newProjects = ProjectsWorked[currentLenguage];
            setProjets(newProjects)

            let newHeaders = certificateheaders;
            newHeaders = headers[currentLenguage];
            setCertificateheaders(newHeaders)

            let newData = certificateData;
            newData = data[currentLenguage];
            setCertificateData(newData)

            let newSkills = skillsData;
            newSkills = skills[currentLenguage];
            setSkillsData(newSkills)
        }
    },[currentLenguage])

    return(
        <div className='container-fluid position-relative p-0 m-0'>
            <div className="container-shape position-relative w-100">
                <Navbar 
                    className="position-absolute" 
                    setCurrentLenguageParent={setCurrentLenguage}
                    setCurrentThemeParent={setCurrentTheme} 
                    />
                    
                <Presentation 
                    About={presentation?.About} 
                    ImageUrl={presentation?.ImageUrl} 
                    CurrentLanguage={currentLenguage} 
                    key="Presentation" />    

                <ShapeHeader />
            </div>  

             <div className="row position-relative pt-5 mt-5 pb-5 mb-5">
                <div className="embla-containers">
                    <EmblaCarousel 
                    currentLenguaje={currentLenguage} 
                    slides={projects} 
                    options={Options} 
                    key="EmblaCarouselHome"
                    /> 
                </div>
            </div>
            {/*
            <div className="row certificate-container">
                <CertificateSection header={certificateheaders} data={certificateData} />
            </div>

            <div className="row">
                    <NeumorphicButtons skills={skillsData?.skills || []} title={skillsData?.title} />
            </div> */}
            
            {/* <GeneralInfo className="position-absolute" whoIAmData={WhoIAm} currentLanguage={currentLenguage} /> */}
        </div>
    )
}

export default HomeView