import PropTypes from 'prop-types';

const MappingSelectOption = ({ Options = [], currentLenguaje = 'Title', onChange }) => (
  <select className="form-select lenguaje-select me-1" aria-label="lenguaje select" onChange={e => onChange(e.target.value)} value={currentLenguaje}>
    {Options && Options.length > 0 ? (
      Options.map(option => (
        <option 
          key={`${option[currentLenguaje]}_1`} 
          value={option.Key}
        >
          {option[currentLenguaje]}
        </option>
      ))
    ) : (
      <option value="">{currentLenguaje === 'Title' ? 'Seleccione' : 'Select'}</option>
    )}
  </select>
);

MappingSelectOption.propTypes = {
  Options: PropTypes.arrayOf(PropTypes.shape({
    Key: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
  })).isRequired,
  currentLenguaje: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

MappingSelectOption.defaultProps = {
  Options: [],
  currentLenguaje: 'Title',
};

export default MappingSelectOption;
