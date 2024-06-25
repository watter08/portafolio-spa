import { useState } from 'react'
import { Navbar,  ShapeHeader, Presentation, ImageSlide } from '../components/index'
import { PresentationInfo } from '../logic/const/presentation.const';
function HomeView(){
    const [ currentLenguage, setCurrentLenguage ] = useState('Title');

    return(
        <div className='container-fluid position-relative p-0 m-0'>
            <div className="container-shape">
                <Navbar className="position-absolute" setCurrentLenguageParent={setCurrentLenguage} />

                <Presentation 
                About={PresentationInfo.About} 
                ImageUrl={PresentationInfo.ImageUrl} 
                CurrentLanguage={currentLenguage} 
                key="Presentation" />                
                {/* <GeneralInfo className="position-absolute" whoIAmData={WhoIAm} currentLanguage={currentLenguage} /> */}
                <ShapeHeader />
            </div>  
            <ImageSlide />          
        </div>
    )
}

export default HomeView