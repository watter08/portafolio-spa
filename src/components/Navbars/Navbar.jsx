import { useCallback, useEffect, useState } from "react"
import MappingNavbarLinks from "./MappingNavbarLinks"
import SettingsButton from '../ConfigurationButton/SettingsButton'
import { NavbarInit } from "../../logic/const/navbar.const"
import { ConfigurationButtonInfo } from "../../logic/const/configuration.const"
import PropTypes from 'prop-types';

function Navbar( { setCurrentLenguageParent = () => {} , setCurrentThemeParent = () => {}}) {
    const [ navData, setNavData ] = useState({})
    const [ availableLanguages, setAvailableLanguages ] = useState([])
    const [ availableThemes, setAvailableThemes ] = useState([])
    const [ currentTheme, setCurrentTheme ] = useState('SuperMan')
    const [ currentLanguage, setCurrentLanguage ] = useState('ES')    
    const [configurationInputs, setConfigurationInputs] = useState([])

    useEffect(() => {
        if(currentLanguage){
            let newAvailableLanguage = {...availableLanguages};
            newAvailableLanguage = ConfigurationButtonInfo[currentLanguage].Languages; 
            setAvailableLanguages(newAvailableLanguage);

            let newAvailableTheme = {...availableThemes};
            newAvailableTheme = ConfigurationButtonInfo[currentLanguage].Themes;            
            setAvailableThemes(newAvailableTheme)

            let newNavData = {...navData};
            newNavData = NavbarInit[currentLanguage];
            setNavData(newNavData)     
            
            changeConfigurationInputsLanguage()
        }
    },[currentLanguage])

    const changeConfigurationInputsLanguage = () => {
        const newConfigurationInputs = [
            {
                Label: ConfigurationButtonInfo[currentLanguage].LanguageLabel,
                onChange: handleCurrentLanguage,
                Options: availableLanguages,
                value: currentLanguage,
            },
            {
                Label: ConfigurationButtonInfo[currentLanguage].ThemeLabel,
                onChange: handleCurrentTheme,
                Options: availableThemes,
                value: currentTheme,
            },
        ];
        setConfigurationInputs(newConfigurationInputs);
    }

    const handleCurrentLanguage = (language) => {
        setCurrentLenguageParent(language);
        setCurrentLanguage(language);
    }

    const handleCurrentTheme = (theme) => {
        setCurrentTheme(theme);
        setCurrentThemeParent(theme);
    }

    // const handleConfigurationInputs = useCallback((value, index) => {
    //     setConfigurationInputs(prevInputs => {
    //         const newInputs = [...prevInputs];
    //         if (newInputs[index]) {
    //             newInputs[index] = { ...newInputs[index], value };
    //         }
    //         return newInputs;
    //     });
    // }, []);


    
    
    // const handleCurrentLanguage = useCallback((language, index) => {
    //     setCurrentLenguageParent(language);
    //     setCurrentLanguage(language);
    //     handleConfigurationInputs(language, index);
    // }, [setCurrentLanguage, handleConfigurationInputs]);

    // const handleCurrentTheme = useCallback((theme, index) => {
    //     setCurrentTheme(theme);
    //     setCurrentThemeParent(theme);
    //     handleConfigurationInputs(theme, index);
    // }, [setCurrentTheme, handleConfigurationInputs]);

    
    
    // useEffect(() => {
    //     const newConfigurationInputs = [
    //         {
    //             Label: ConfigurationButtonInfo[currentLanguage].LanguageLabel,
    //             onChange: handleCurrentLanguage,
    //             Options: availableLanguages,
    //             value: currentLanguage,
    //         },
    //         {
    //             Label: ConfigurationButtonInfo[currentLanguage].ThemeLabel,
    //             onChange: handleCurrentTheme,
    //             Options: availableThemes,
    //             value: currentTheme,
    //         },
    //     ];
    //     setConfigurationInputs(newConfigurationInputs);
    // }, [availableLanguages, availableThemes, handleCurrentLanguage, handleCurrentTheme, currentLanguage, currentTheme]);



    return(
        <header className="row">
            <nav className="navbar navbar-expand-lg navbar-light navbar-glass fixed-top">
                <div className="container-fluid content">
                    <a className="navbar-brand" href={navData?.NavBrand?.Link}>{ navData?.NavBrand?.Title }</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <MappingNavbarLinks Links={navData && navData?.Links ? navData?.Links : []} />
                        </ul>
                        <form className="d-flex" role="search">   
                                <SettingsButton 
                                    SelectConfiguration={configurationInputs}
                                    ConfigurationLabel={ConfigurationButtonInfo[currentLanguage]?.ConfigurationLabel}
                                    CurrentLanguage={currentLanguage}
                                 />                                            
                            <input className="form-control search-input-navbar me-2" type="search" placeholder="" aria-label="Search" />
                            <button className="btn btn-dark search-button-navbar" type="submit">{navData?.ButtonSearch}</button>                        
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