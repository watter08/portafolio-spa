import { useCallback, useEffect, useState } from "react"
import MappingNavbarLinks from "./MappingNavbarLinks"
import SettingsButton from '../ConfigurationButton/SettingsButton'
import { NavbarInit } from "../../logic/const/navbar.const"
import { ConfigurationButtonInfo } from "../../logic/const/configuration.const"
import PropTypes from 'prop-types';

function Navbar( { setCurrentLenguageParent = () => {} , setCurrentThemeParent = () => {}}){
    const [ navData ] = useState(NavbarInit)
    const [ availableLenguajes ] = useState(ConfigurationButtonInfo.Lenguajes)
    const [ availableThemes ] = useState(ConfigurationButtonInfo.Themes)
    const [ currentTheme, setCurrentTheme ] = useState('Title')
    const [ currentLenguaje, setCurrentLenguaje ] = useState('Title')    
    const [configurationInputs, setConfigurationInputs] = useState([])


    const handleConfigurationInputs = useCallback((value, index) => {
        setConfigurationInputs(prevInputs => {
            const newInputs = [...prevInputs];
            if (newInputs[index]) {
                newInputs[index] = { ...newInputs[index], value };
            }
            return newInputs;
        });
    }, []);
    
    const handleCurrentLanguage = useCallback((language, index) => {
        setCurrentLenguageParent(language);
        setCurrentLenguaje(language);
        handleConfigurationInputs(language, index);
    }, [setCurrentLenguaje, handleConfigurationInputs]);

    const handleCurrentTheme = useCallback((theme, index) => {
        setCurrentTheme(theme);
        setCurrentThemeParent(theme);
        handleConfigurationInputs(theme, index);
    }, [setCurrentTheme, handleConfigurationInputs]);

    

    useEffect(() => {
        const newConfigurationInputs = [
            {
                Label: ConfigurationButtonInfo.LanguageLabel,
                onChange: handleCurrentLanguage,
                Options: availableLenguajes,
                value: currentLenguaje,
            },
            {
                Label: ConfigurationButtonInfo.ThemeLabel,
                onChange: handleCurrentTheme,
                Options: availableThemes,
                value: currentTheme,
            },
        ];
        setConfigurationInputs(newConfigurationInputs);
    }, [availableLenguajes, availableThemes, handleCurrentLanguage, handleCurrentTheme, currentLenguaje, currentTheme]);


    return(
        <header className="row">
            <nav className="navbar navbar-expand-lg navbar-light navbar-glass fixed-top">
                <div className="container-fluid content">
                    <a className="navbar-brand" href={navData?.NavBrand?.Link}>{ navData?.NavBrand[currentLenguaje] }</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <MappingNavbarLinks Links={navData && navData?.Links ? navData?.Links : []} currentLenguaje={currentLenguaje} />
                        </ul>
                        <form className="d-flex" role="search">   
                                <SettingsButton 
                                    SelectConfiguration={configurationInputs}
                                    ConfigurationLabel={ConfigurationButtonInfo?.ConfigurationLabel[currentLenguaje]}
                                    CurrentLanguage={currentLenguaje}
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
    setCurrentLenguageParent : PropTypes.func,
    setCurrentThemeParent:PropTypes.func
  };
  
  Navbar.defaultProps = {
    setCurrentLenguageParent : () => {},
    setCurrentThemeParent:() => {}
  };

export default Navbar