import PropTypes from 'prop-types';
import AccordionCard from '../Accordion/AccordionCard'

const ExperienceInfo = ({experiences = []}) => {
    return(
        <div className="ExperienceInfo">
            {experiences && experiences?.length > 0 ? experiences.map((experience, index) =>  <h6 key={`info_of_work_${index}`}>{experience}</h6>): ''}
        </div>
    )
}

ExperienceInfo.propTypes = {
    experiences : PropTypes.arrayOf(PropTypes.string)
};

const Works = ({ works = []}) => {
    return(
            <>
            {works && works.length > 0 && works.map((work, index) => (
                <AccordionCard 
                key={`accordion_card_${index}`}
                title={work?.companyName}
                date={work?.fromTo}
                >
                    <h1>Accordion he</h1>
                </AccordionCard>
            ))}
            </>            
    )
}

Works.propTypes = {
    works: PropTypes.arrayOf(PropTypes.shape({
        companyName:PropTypes.string,
        companyDescription: PropTypes.string,
        fromTo:PropTypes.string,
        place:PropTypes.string,
        positions: PropTypes.arrayOf(PropTypes.string),
        goals: PropTypes.arrayOf(PropTypes.string)
    }))
};


function AboutMe({experience = [], title = '', laboralTitle, works}){
    return(
        <>
            <div className="aboutme-container blue pb-5">
                <div className="content mx-auto">
                    <h4>{title}</h4>
                    <ExperienceInfo experiences={experience} />                    
                </div>
            </div>
            <div className='aboutme-container gray pb-3'>
                <div className="content mx-auto">
                    <h4>{laboralTitle}</h4>
                    <Works works={works} />
                </div>
            </div>
        </>                    
    )
}


AboutMe.propTypes = {
    experience : PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    laboralTitle: PropTypes.string,
    works: PropTypes.arrayOf(PropTypes.shape({
        companyName:PropTypes.string,
        companyDescription: PropTypes.string,
        fromTo:PropTypes.string,
        place:PropTypes.string,
        positions: PropTypes.arrayOf(PropTypes.string),
        goals: PropTypes.arrayOf(PropTypes.string)
    }))
};
  

export default AboutMe