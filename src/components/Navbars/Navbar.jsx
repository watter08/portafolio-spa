import { useState } from "react"
import MappingNavbarLinks from "./MappingNavbarLinks"
import { NavbarInit } from "../../logic/const/navbar.const"
import { Lenguajes } from "../../logic/const/lenguajes.const"
import MappingSelectOption from "./MappingSelectOption"
import PropTypes from 'prop-types';

function Navbar( { setCurrentLenguageParent = () => {}}){
    const [ navData ] = useState(NavbarInit)
    const [ availableLenguajes ] = useState(Lenguajes)
    const [ currentLenguaje, setCurrentLenguaje ] = useState('Title')

    const handleCurrentLanguage = (language) => {
        setCurrentLenguageParent(language)
        setCurrentLenguaje(language)
    }

    return(
        <header className="row">
            <nav className="navbar navbar-expand-lg navbar-light navbar-glass fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href={navData?.NavBrand?.Link}>{ navData?.NavBrand[currentLenguaje] }</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <MappingNavbarLinks Links={navData && navData?.Links ? navData?.Links : []} currentLenguaje={currentLenguaje} />
                        </ul>
                        <form className="d-flex" role="search">                        
                                <MappingSelectOption 
                                Options={availableLenguajes} 
                                currentLenguaje={currentLenguaje} 
                                onChange={handleCurrentLanguage} 
                                />                         
                            <input className="form-control search-input-navbar me-2" type="search" placeholder="" aria-label="Search" />
                            <button className="btn btn-dark search-button-navbar" type="submit">{navData?.ButtonSearch[currentLenguaje]}</button>                        
                        </form>
                    </div>
                </div>
            </nav>                    
        </header>
    )
}

Navbar.propTypes = {
    setCurrentLenguageParent : PropTypes.func
  };
  
  Navbar.defaultProps = {
    setCurrentLenguageParent : () => {},
  };

export default Navbar