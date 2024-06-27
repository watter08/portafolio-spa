import { useState } from 'react'
import { Navbar,  ShapeHeader, Presentation,  EmblaCarousel, CertificateSection } from '../components/index'
import { PresentationInfo } from '../logic/const/presentation.const';
import { ProjectsWorked } from '../logic/const/projects.const'


function HomeView(){
    const [ currentLenguage, setCurrentLenguage ] = useState('Title');
    const [Options] = useState({ axis: 'y', dragFree: true, direction: 'rtl', loop: true })
    const [ currentTheme, setCurrentTheme ] = useState('Title')

    return(
        <div className='container-fluid position-relative p-0 m-0'>
            <div className="container-shape">
                <Navbar 
                    className="position-absolute" 
                    setCurrentLenguageParent={setCurrentLenguage}
                    setCurrentThemeParent={setCurrentTheme} 
                    />
                {/* <Presentation 
                    About={PresentationInfo.About} 
                    ImageUrl={PresentationInfo.ImageUrl} 
                    CurrentLanguage={currentLenguage} 
                    key="Presentation" />                    */}
                <ShapeHeader />
            </div>  

            {/* <div className="row position-relative pt-5 mt-5 pb-5 mb-5">
                <div className="embla-containers">
                    <EmblaCarousel 
                    currentLenguaje={currentLenguage} 
                    slides={ProjectsWorked} 
                    options={Options} 
                    key="EmblaCarouselHome"
                    /> 
                </div>
            </div>
            
            <div className="row certificate-container">
                <CertificateSection />
            </div> */}
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            
            {/* <GeneralInfo className="position-absolute" whoIAmData={WhoIAm} currentLanguage={currentLenguage} /> */}
        </div>
    )
}

export default HomeView