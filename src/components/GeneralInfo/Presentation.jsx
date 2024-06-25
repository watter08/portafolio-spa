import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'
import PropTypes from 'prop-types';
import UserImg from '../../assets/image/profile.png'


function Presentation({ About, ImageUrl, CurrentLanguage = 'Title' }){
    const [  userImage, setUserImage ] = useState(UserImg);
    const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(boxRef.current, 
      { x: '-100%', opacity: 0 }, 
      { x: '0%', opacity: 1, duration: 2, ease: 'power3.out' }
    );
  }, []);


    useEffect(() => {
        if(ImageUrl){
            setUserImage(ImageUrl)
        }
    },[ImageUrl])


    return(
        <div className="row">
            <div ref={boxRef} className="content box mx-auto presentation-container">
                <div className="presentation-info">
                    <span>{About[CurrentLanguage]}</span>
                </div>
                <div className="presentation-img">
                    <img  width="300" src={userImage} alt="" />
                </div>
            </div>
        </div>
    )
}

Presentation.propTypes = {
    About: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        TitleEng: PropTypes.string.isRequired
    }).isRequired,
    ImageUrl: PropTypes.string,
    CurrentLanguage: PropTypes.string
};
export default Presentation