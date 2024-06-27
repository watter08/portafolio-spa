import { DataTable } from '../'
import { data, headers } from '../../logic/const/certificates.const'




const CertificateSection = () => {
    return(
        <div className="position-relative">
            <div className="certificate-info">
                <p className="title">Certificados y Hoja de Vida</p>
            </div>
                <div className="content mx-auto position-relative">                    
                    <DataTable 
                    data={data} 
                    headers={headers} 
                    rowsPerPage={5} 
                    rowsPerPageOptions={[5, 10, 15]} 
                    styleClass=""
                    key="DatatableCertificateHome" 
                    />
                </div>
                <div className="certificate-info">
                    <p className="subtitle">Certificados y Hoja de Vida</p>
                </div>
        </div>                
    )
}

export default CertificateSection