import PropTypes from 'prop-types';

const NeumorphicButtons = ({ skills = [], title }) => {
  return(
    <div className='neumorphicbuttons pt-5 pb-5 position-relative'>
      <h2>{title}</h2>
      <div className="content mx-auto">
      {skills && skills.map((skill, index) => (
        <button className='btn text-center neumorphic' key={`neumorphic_button_${index}`}>
          {/* <i className='fa-light fa-fire'></i> */}
          {skill?.title}
        </button>
      ))}
      </div>      
    </div>
  )
}

NeumorphicButtons.propTypes = {
  skills : PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string
  })),
  title: PropTypes.string
  };
  
  NeumorphicButtons.defaultProps = {
    skills : () => [],
    title: ''
  };

export default NeumorphicButtons
