import PropTypes from 'prop-types';
import AccordionCard from '../Accordion/AccordionCard'

const ExperienceInfo = ({experiences = []}) => {
    return(
        <div className="ExperienceInfo">
            {experiences && experiences?.length > 0 ? experiences.map((experience, index) =>  <h6 className='outfit-medium pt-3' key={`info_of_work_${index}`}>{experience}</h6>): ''}
        </div>
    )
}

ExperienceInfo.propTypes = {
    experiences : PropTypes.arrayOf(PropTypes.string)
};

const Works = ({ works = [], laborallabels}) => {
    return(
            <>
            {works && works.length > 0 && works.map((work, index) => (
                <AccordionCard 
                key={`accordion_card_${index}`}
                title={work?.companyName}
                date={work?.fromTo}
                >
                    <div className="card">
                        <div className="card-body p-5">
                            <div className="laboral-description">
                                <h5 className='outfit-bold'>{laborallabels?.aboutCompany}</h5>
                                <span>{work?.companyDescription}</span>
                            </div>
                            <div className="laboral-place-fromto">
                                <div className="laboral-from-to pt-4">
                                    <h5 className='outfit-bold'>{laborallabels?.dateInCompany}</h5>
                                    <span>{work?.fromTo}</span>
                                </div>
                                <div className="laboral-place pt-4">
                                    <h5 className='outfit-bold'>{laborallabels?.placeCompany}</h5>
                                    <span>{work?.place}</span>
                                </div>
                            </div> 
                            <div className="laboral-positions pt-2 pb-4">
                                <h5 className='outfit-bold'>{laborallabels?.positionsInCompany}</h5>
                                {work?.positions && work?.positions?.length > 0 && work.positions.map((position, index) => (
                                    <span key={`position_key_${index}`}>{`${position}${work.positions.length != index+1 ? ',' : ''} `}</span>
                                ))}
                            </div>   
                            <div className="laboral-goals pt-2 pb-4">
                                <h5 className='outfit-bold'>{laborallabels?.functionsInCompany}</h5>
                                {work?.goals && work?.goals?.length > 0 && work.goals.map((goal, index) => (
                                    <p key={`goals${index}`}>{`${goal}${work.goals.length != index+1 ? ',' : ''} `}</p>
                                ))}
                            </div>                          
                        </div>
                    </div>
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
    })),
    laborallabels: PropTypes.shape({
        aboutCompany: PropTypes.string,
        dateInCompany: PropTypes.string,
        placeCompany: PropTypes.string,
        positionsInCompany: PropTypes.string,
        functionsInCompany: PropTypes.string
    })
};

const Contact = ({ contactInfo = {}}) => {
    return(
            <>
                <div className="contact-card-body card">
                    <div className="card-body p-5">
                        <div className="contact-info-container">

                            <div className="info">
                            <h5 className='outfit-medium'>{contactInfo?.labels?.email}</h5>
                            <span>{contactInfo?.info?.email}</span>
                            </div>

                            <div className="info">
                            <h5 className='outfit-medium'>{contactInfo?.labels?.phone}</h5>
                            <span>{contactInfo?.info?.phone}</span>
                            </div>

                            <div className="info">
                            <h5 className='outfit-medium'>{contactInfo?.labels?.github}</h5>
                            <span>{contactInfo?.info?.github}</span>
                            </div>

                            <div className="info">
                            <h5 className='outfit-medium'>{contactInfo?.labels?.linkdn}</h5>
                            <span>{contactInfo?.info?.linkdn}</span>
                            </div>

                            <div className="info">
                            <h5 className='outfit-medium'>{contactInfo?.labels?.page}</h5>
                            <span>{contactInfo?.info?.page}</span>
                            </div>

                        </div> 
                    </div>
                </div>
            </>            
    )
}

Contact.propTypes = {
    contactInfo: PropTypes.shape({
        labels: PropTypes.shape({
            phone:PropTypes.string,
            email:PropTypes.string,
            linkdn:PropTypes.string,
            github:PropTypes.string,
            page:PropTypes.string
        }),
        info: PropTypes.shape({
            phone:PropTypes.string,
            email:PropTypes.string,
            linkdn:PropTypes.string,
            github:PropTypes.string,
            page:PropTypes.string
        })
    })
};

function AboutMe({experience = [], title = '', laboralTitle, works, laborallabels,contactInfo,ContactLabel = ''}){
    return(
        <>
            <div className="aboutme-container blue pb-5">
                <div className="content mx-auto pt-5">
                    <h4 className='outfit-medium pb-3'>{title}</h4>
                    <ExperienceInfo experiences={experience} />                    
                </div>
            </div>
            <div className='aboutme-container gray pb-5'>
                <div className="content mx-auto pt-5">
                    <h4 className='outfit-medium pb-3'>{laboralTitle}</h4>
                    <Works 
                    works={works} 
                    laborallabels={laborallabels}
                    />
                </div>
            </div>
            <div className='aboutme-container contact gray pb-5'>
                <div className="content mx-auto pt-5">
                    <h4 className='text-white outfit-medium pb-3'>{ContactLabel}</h4>
                    <Contact contactInfo={contactInfo} />
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
    })),
    laborallabels: PropTypes.shape({
        aboutCompany: PropTypes.string,
        dateInCompany: PropTypes.string,
        placeCompany: PropTypes.string,
        positionsInCompany: PropTypes.string,
        functionsInCompany: PropTypes.string
    }),
    contactInfo: PropTypes.shape({
        labels: PropTypes.shape({
            phone:PropTypes.string,
            email:PropTypes.string,
            linkdn:PropTypes.string,
            github:PropTypes.string,
            page:PropTypes.string
        }),
        info: PropTypes.shape({
            phone:PropTypes.string,
            email:PropTypes.string,
            linkdn:PropTypes.string,
            github:PropTypes.string,
            page:PropTypes.string
        })
    }),
    ContactLabel: PropTypes.string
};
  

export default AboutMe