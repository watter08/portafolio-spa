import PropTypes from 'prop-types';
import { DataTable } from '../'

const CertificateSection = ({ data = [], header = []}) => {
    return(
        <div className="position-relative">
            <div className="certificate-info">
                <p className="title">Certificados y Hoja de Vida</p>
            </div>
                <div className="content mx-auto position-relative">                    
                    <DataTable 
                    data={data} 
                    headers={header} 
                    rowsPerPage={5} 
                    rowsPerPageOptions={[5, 10, 15]} 
                    styleClass="glass"
                    key="DatatableCertificateHome" 
                    />
                </div>
                <div className="certificate-info">
                    <p className="subtitle">Certificados y Hoja de Vida</p>
                </div>
        </div>                
    )
}

CertificateSection.propTypes = {
    header : PropTypes.array,
    data:PropTypes.array
};
  
CertificateSection.defaultProps = {
    data : () => [],
    header:() => []
};

export default CertificateSection