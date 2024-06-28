import MappingSelectOption from "../Navbars/MappingSelectOption"
import PropTypes from 'prop-types';

const SettingsButton = ({ SelectConfiguration, ConfigurationLabel }) => {
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
            <li key={`SelectOptionConfigurationButton_${index}`} className="settingsDropdown dropdown-item mb-3">                
            <h4>{option?.Label}</h4>
            <MappingSelectOption 
            Options={option?.Options} 
            onChange={option?.onChange} 
            Index={index}
            value={option?.value}
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
            Key: PropTypes.string,
            Title: PropTypes.string,
          })),
          currentLenguaje: PropTypes.string,
          onChange: PropTypes.func,
          Label: PropTypes.string,
          value: PropTypes.string
    })),
    ConfigurationLabel: PropTypes.string,
};

MappingSelectOption.defaultProps = {
    SelectConfiguration: [],
    ConfigurationLabel: '',
  };
  
export default SettingsButton