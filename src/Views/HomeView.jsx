import { useState } from 'react'
import { Navbar,  ShapeHeader, GeneralInfo } from '../components/index'
import { WhoIAm } from '../logic/const/whoiam.const'
function HomeView(){
    const [ currentLenguage, setCurrentLenguage ] = useState('Title');

    return(
        <div className='content container-fluid position-relative p-0 m-0'>
            <div className="container-shape">
                <Navbar className="position-absolute" setCurrentLenguageParent={setCurrentLenguage} />
                <ShapeHeader />
                <GeneralInfo className="position-absolute" whoIAmData={WhoIAm} currentLanguage={currentLenguage} />
                {/* <ImageSlide /> */}
            </div>            
        </div>
    )
}

export default HomeView