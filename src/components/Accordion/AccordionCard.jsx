import { useState } from 'react';
import PropTypes from 'prop-types';

const AccordionCard = ({ title, date, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-card">
      <div className="accordion-header">
        <div className="header-content">
          <h2 className="title">{title}</h2>
          <span className="date">{date}</span>
        </div>
        <button className="toggle-button" onClick={toggleAccordion}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
};

AccordionCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AccordionCard;
