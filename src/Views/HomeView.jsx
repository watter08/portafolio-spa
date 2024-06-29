import { useEffect, useState } from 'react'
import { AboutMe,Navbar,  ShapeHeader, Presentation,  EmblaCarousel, CertificateSection, NeumorphicButtons } from '../components/index'
import { PresentationInfo } from '../logic/const/presentation.const';
import { ProjectsWorked } from '../logic/const/projects.const'
import { headers, data, certificateSectionLabels } from '../logic/const/certificates.const'
import { skills } from '../logic/const/skills.const'
import { AboutMeInfo } from '../logic/const/aboutme.const';
import { UpButton } from '../logic/const/configuration.const';

const THEMES = Object.freeze({
    light: 'SuperMan',
    dark:'Batman'
});

function HomeView(){
    const [ currentLenguage, setCurrentLenguage ] = useState('ES');
    const [presentation, setPresentation] = useState({});
    const [projects, setProjets] = useState([]);
    const [skillsData, setSkillsData] = useState({});
    const [certificateheaders, setCertificateheaders] = useState([]);
    const [certificateData, setCertificateData] = useState([]);
    const [aboutMeInfo, setAboutMeInfo] = useState([]);
    const [ upBotton, setUpButton] = useState({});
    const [ certificateLabel, setCertificateLabel] = useState({});
    const [Options] = useState({ axis: 'y', dragFree: true, direction: 'rtl', loop: true })
    const [ currentTheme, setCurrentTheme ] = useState(THEMES.light)

    useEffect(()=> {
        const root = document.documentElement;
        root.setAttribute('data-theme', THEMES.light);
    },[])

    const handleChangeTheme = (theme) => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        setCurrentTheme(theme)
    }


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

            let newaboutMeInfo = aboutMeInfo;
            newaboutMeInfo = AboutMeInfo[currentLenguage];
            setAboutMeInfo(newaboutMeInfo)

            let newUpButton = upBotton;
            newUpButton = UpButton[currentLenguage];
            setUpButton(newUpButton)

            let newCertificateLabel = certificateLabel;
            newCertificateLabel = certificateSectionLabels[currentLenguage];
            setCertificateLabel(newCertificateLabel)
        }
    },[currentLenguage])

    return(
        <div className='container-fluid row position-relative p-0 m-0'>
            <div className="container-shape position-relative w-100" id="home">
                <Navbar                     
                    className="position-absolute" 
                    setCurrentLenguageParent={setCurrentLenguage}
                    setCurrentThemeParent={handleChangeTheme} 
                    />
                    
                <Presentation 
                    About={presentation?.About} 
                    ImageUrl={presentation?.ImageUrl} 
                    CurrentLanguage={currentLenguage} 
                    key="Presentation" />    

                <ShapeHeader />
            </div>  

             <div className="position-relative pt-5 mt-5 pb-5 mb-5">
                <div className="embla-containers">
                    <EmblaCarousel 
                    currentLenguaje={currentLenguage} 
                    slides={projects} 
                    options={Options} 
                    key="EmblaCarouselHome"
                    /> 
                </div>
            </div>
            
            <div className="certificate-container table-responsive" id='Certificates'>
                <CertificateSection 
                certificateLabel={certificateLabel}
                header={certificateheaders} 
                data={certificateData} />
            </div>

            <NeumorphicButtons skills={skillsData?.skills || []} title={skillsData?.title} />
            
                <AboutMe 
                experience={aboutMeInfo?.experience || []}
                title={aboutMeInfo?.title} 
                laboralTitle={aboutMeInfo?.laboralTitle}
                works={aboutMeInfo?.works}
                laborallabels={aboutMeInfo?.laborallabels}
                contactInfo={aboutMeInfo?.contactInfo}
                ContactLabel={aboutMeInfo?.contactInfoLabel}
                />

            <div className="up-button">                
                <a className="btn" href='#home'>
                    {upBotton?.homeUpLabel}
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up ms-2">
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default HomeView