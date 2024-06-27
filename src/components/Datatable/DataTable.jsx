import  { useState } from 'react';
import PropTypes from 'prop-types';

const DataTableComponent = ({ headers, data, rowsPerPage, rowsPerPageOptions, styleClass }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(rowsPerPage);

    // Filtrar datos basado en el término de búsqueda
    const filteredData = data.filter(row => {
        return headers.some(header => {
            const value = row[header.key].toString().toLowerCase();
            return value.includes(searchTerm.toLowerCase());
        });
    });

    // Paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Cambiar la página actual
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Renderizar celdas basado en el tipo definido en el header
    const renderCellContent = (value, type) => {
        switch (type) {
            case 'link':
                return (
                    <a href={value} target="_blank" rel="noopener noreferrer">
                        {value}
                    </a>
                );
            case 'image':
                return (
                    <img
                        src={value}
                        alt=""
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                    />
                );
            case 'text':
            default:
                return value;
        }
    };

    return (
        <div className={`data-table ${styleClass}`}>
            <div className="data-table__controls">
            <div className="data-table__pagination">
                    <span>Rows per page:</span>
                    <select
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(parseInt(e.target.value, 10));
                            setCurrentPage(1); // Reset page to 1 when rows per page changes
                        }}
                    >
                        {rowsPerPageOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1); // Reset page to 1 when search term changes
                    }}
                />                
            </div>
            <table className="table table-striped data-table__table table-responsive">
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th scope="col"  key={header.key}>{header.value}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((row, index) => (
                        <tr key={index}>
                            {headers.map(header => (
                                <td key={header.key}>
                                    {renderCellContent(row[header.key], header.type)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="data-table__footer">
                <div className="data-table__page-info">
                    Page {currentPage} of {totalPages}
                </div>
                <div className="data-table__pagination-buttons">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};


DataTableComponent.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired, 
            value: PropTypes.string.isRequired, 
            type: PropTypes.oneOf(['text', 'link', 'image']).isRequired 
        })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired, 
    rowsPerPage: PropTypes.number.isRequired, 
    rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
    styleClass: PropTypes.string
};

export default DataTableComponent