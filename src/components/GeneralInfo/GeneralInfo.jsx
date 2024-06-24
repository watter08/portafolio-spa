import  { useState } from 'react';
import PropTypes from 'prop-types';

// Componente para mostrar cada item de información
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

// Componente que recibe el objeto como propiedad y muestra la información
const DynamicInfoDisplay = ({ data }) => {
    return (
        <div className="info-container">
            {Object.keys(data).map(key => (
                <InfoItem
                    key={key}
                    label={key}
                    value={
                        data[key].Title.startsWith('http') ? (
                            <a href={data[key].Title} target="_blank" rel="noopener noreferrer">
                                {data[key].Title}
                            </a>
                        ) : (
                            data[key].Title
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
};

// Componente principal que utiliza el componente DynamicInfoDisplay
const App = ({ whoIAmData }) => {
    const [isVisible] = useState(false);


    return (
        <div className={`app p-5 mt-5  ${isVisible ? 'visible' : ''}`}>
            <h1>Who I Am</h1>
            <DynamicInfoDisplay data={whoIAmData} />
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
};

export default App;