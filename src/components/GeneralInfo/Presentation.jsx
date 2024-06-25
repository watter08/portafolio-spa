import PropTypes from 'prop-types';
import UserImg from '../../assets/image/profile.png'
import { useEffect, useState } from 'react';

function Presentation({ About, ImageUrl, CurrentLanguage = 'Title' }){
    const [  userImage, setUserImage ] = useState(UserImg);

    useEffect(() => {
        if(ImageUrl){
            setUserImage(ImageUrl)
        }
    },[ImageUrl])


    return(
        <div className="row">
            <div className="content  mx-auto presentation-container">
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