import PropTypes from 'prop-types';

const MappingSelectOption = ({ Options = [], currentLenguaje = 'Title', onChange, Index }) => (
  <select className="form-select lenguaje-select me-1" aria-label="lenguaje select" onChange={e => onChange(e.target.value, Index)} value={currentLenguaje}>
    {Options && Options.length > 0 ? (
      Options.map((option , index) => (
        <option 
          className="lenguaje-select-option"
          key={`${option[currentLenguaje]}_${index}`} 
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
  Index: PropTypes.number
};

MappingSelectOption.defaultProps = {
  Options: [],
  currentLenguaje: 'Title',
  Index: -5
};

export default MappingSelectOption;
