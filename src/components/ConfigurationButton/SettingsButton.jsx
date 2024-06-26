import MappingSelectOption from "../Navbars/MappingSelectOption"
import PropTypes from 'prop-types';

const SettingsButton = ({ SelectConfiguration, ConfigurationLabel, CurrentLanguage }) => {
  return (
    <div className="dropdown me-1">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="settingsDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <label htmlFor="">{ConfigurationLabel}</label>
      </button>
      <ul className="dropdown-menu" aria-labelledby="settingsDropdown">      
        {SelectConfiguration && SelectConfiguration.map((option, index) => (
            <li key={`SelectOptionConfigurationButton_${index}`} className="dropdown-item mb-3">                
            <h4>{option?.Label[CurrentLanguage]}</h4>
            <MappingSelectOption 
            Options={option?.Options} 
            currentLenguaje={option.value} 
            onChange={option?.onChange} 
            Index={index}
            /></li>
        ))
        }
      </ul>
    </div>
  );
};


SettingsButton.propTypes = {
    SelectConfiguration: PropTypes.arrayOf(PropTypes.shape({
        Options: PropTypes.arrayOf(PropTypes.shape({
            Key: PropTypes.string.isRequired,
            Title: PropTypes.string.isRequired,
          })).isRequired,
          currentLenguaje: PropTypes.string,
          onChange: PropTypes.func.isRequired,
          Label: PropTypes.shape({
            Title: PropTypes.string,
            TitleEng: PropTypes.string
          }),
          value: PropTypes.string
    })),
    ConfigurationLabel: PropTypes.string,
    CurrentLanguage: PropTypes.string
};

MappingSelectOption.defaultProps = {
    SelectConfiguration: [],
    ConfigurationLabel: '',
    CurrentLanguage: 'Title'
  };
  
export default SettingsButton