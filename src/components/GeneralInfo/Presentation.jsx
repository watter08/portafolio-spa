import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'
import PropTypes from 'prop-types';
import UserImg from '../../assets/image/profile.png'


function Presentation({ About, ImageUrl }){
    const [  userImage, setUserImage ] = useState(UserImg);
    const boxRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(boxRef.current, 
          { 
            x: '100%', 
            scale: 0.3, 
            opacity: 0 
          }, 
          { 
            x: '0%', 
            scale: 1, 
            opacity: 1, 
            duration: 1.5, 
            ease: 'back.out(1.7)' 
          }
        );
      }, []);


    useEffect(() => {
        if(ImageUrl){
            setUserImage(ImageUrl)
        }
    },[ImageUrl])


    return(
            <div ref={boxRef} className="content box mx-auto presentation-container">
                <div className="presentation-info">
                    <span>{About}</span>
                </div>
                <div className="presentation-img">
                    <img src={userImage} alt="" />
                </div>
            </div>
    )
}

Presentation.propTypes = {
    About:  PropTypes.string,
    ImageUrl: PropTypes.string
};
export default Presentation