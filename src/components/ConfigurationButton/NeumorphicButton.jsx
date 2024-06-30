import PropTypes from 'prop-types';

const NeumorphicButtons = ({ skills = [], title }) => {
  return(
    <div className='neumorphicbuttons pt-5 pb-5 position-relative'>
      <h2 className="outfit-bold">{title}</h2>
      <div className="content mx-auto">
      {skills && skills.map((skill, index) => (
        <button className='btn text-center neumorphic' key={`neumorphic_button_${index}`}>
          <img width={50} src={skill?.image} alt="" />
          <p>{skill?.title}</p>
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
  

export default NeumorphicButtons
