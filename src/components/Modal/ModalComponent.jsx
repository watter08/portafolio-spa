import PropTypes from 'prop-types';

const ModalComponent = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Title</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  ModalComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

ModalComponent.propTypes = {
    isOpen: PropTypes.bool, 
    openModal: PropTypes.func, 
    closeModal: PropTypes.func 
  };
  
ModalComponent.defaultProps = {
    isOpen:     false, 
    openModal:  () => {}, 
    closeModal: () => {}
  };

export default ModalComponent;