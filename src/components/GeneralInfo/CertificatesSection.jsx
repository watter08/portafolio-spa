import PropTypes from 'prop-types';
import { DataTable } from '../'

const CertificateSection = ({ data = [], header = [], certificateLabel = {}}) => {
    return(
        <div className="position-relative mx-auto">
            <div className="content mx-auto certificate-info pt-5 pb-5">
                <p className="title">{certificateLabel?.title}</p>
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
                <div className="certificate-info pt-5 pb-5">
                    <p className="subtitle lh-0 pt-0 nt-0">{certificateLabel?.subtitle} <a href={certificateLabel?.link?.link}>{certificateLabel?.link?.title}</a></p>
                </div>
        </div>                
    )
}

CertificateSection.propTypes = {
    header : PropTypes.array,
    data:PropTypes.array,
    certificateLabel: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        link: PropTypes.shape({
            title: PropTypes.string,
            link: PropTypes.string
        })
    })
};
  

export default CertificateSection