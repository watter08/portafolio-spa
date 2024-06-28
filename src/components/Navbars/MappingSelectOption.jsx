import PropTypes from 'prop-types';

const MappingSelectOption = ({ Options = [],value, onChange, Index }) => (
  <select className="form-select lenguaje-select me-1" aria-label="lenguaje select" onChange={e => onChange(e.target.value, Index)} value={value}>
    {Options && Options.length > 0 ? (
      Options.map((option , index) => (
        <option 
          className="lenguaje-select-option"
          key={`${option?.key}_${index}`} 
          value={option.value}
        >
          {option?.key}
        </option>
      ))
    ) : (
      <option value="">{'Seleccione'}</option>
    )}
  </select>
);

MappingSelectOption.propTypes = {
  Options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  currentLenguaje: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  Index: PropTypes.number,
  value:PropTypes.string
};

export default MappingSelectOption;
