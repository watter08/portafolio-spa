import  { useState } from 'react';
import PropTypes from 'prop-types';

const InfoItem = ({ label, value }) => (
    <div className="info-item">
        <span className="info-label">{label}:</span>
        <span className="info-value">{value}</span>
    </div>
);

InfoItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
};

const DynamicInfoDisplay = ({ data, currentLanguage }) => {
    return (
        <div className="info-container">
            {Object.keys(data).map(key => (
                <InfoItem
                    key={key}
                    label={key}
                    value={
                        data[key].Title.startsWith('http') ? (
                            <a href={data[key][currentLanguage]} target="_blank" rel="noopener noreferrer">
                                {data[key][currentLanguage]}
                            </a>
                        ) : (
                            data[key][currentLanguage]
                        )
                    }
                />
            ))}
        </div>
    );
};

DynamicInfoDisplay.propTypes = {
    data: PropTypes.objectOf(
        PropTypes.shape({
            Title: PropTypes.string.isRequired,
            TitleEng: PropTypes.string.isRequired
        })
    ).isRequired,
    currentLanguage: PropTypes.string
};

const App = ({ whoIAmData, currentLanguage }) => {
    const [isVisible] = useState(false);
    const { Message, ...data } = whoIAmData;
    return (
        <div className={`whoiam p-5 mt-5  ${isVisible ? 'visible' : ''}`}>
            <h1>{Message[currentLanguage]}</h1>
            <DynamicInfoDisplay data={data} currentLanguage={currentLanguage} />
        </div>
    );
};

App.propTypes = {
    whoIAmData: PropTypes.objectOf(
        PropTypes.shape({
            Title: PropTypes.string.isRequired,
            TitleEng: PropTypes.string.isRequired
        })
    ).isRequired,
    currentLanguage: PropTypes.string
};

export default App;