import React from 'react'

const PagerForm = ({ pagesNumber, currentPage, setCurrentPage }) => {

const handlePrev = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < pagesNumber - 1) setCurrentPage(currentPage + 1);
    };

return (
    <div>
        <ol style={{ display: 'flex', listStyle: 'none', padding: 0, alignItems: 'center', width: '100%' }}>
            <li>
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        border: 'none',
                        background: '#bdbdbd',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginRight: 16,
                        cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    aria-label="Previous page"
                >
                    {"<-"}
                </button>
            </li>
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                margin: '0 8px'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    right: 0,
                    height: 2,
                    background: '#e0e0e0',
                    transform: 'translateY(-50%)',
                    zIndex: 0,
                    width: '100%'
                }} />
                {[...Array(pagesNumber)].map((_, idx) => (
                    <span
                        key={idx}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: idx === currentPage ? '#6f4caf' : '#eee',
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: idx === currentPage ? '#fff' : '#333',
                            border: idx === currentPage ? '2px solid #6f4caf' : 'none',
                            boxSizing: 'border-box',
                            position: 'relative',
                            zIndex: 1,
                            marginLeft: idx === 0 ? 0 : 'calc((100% - 36px * ' + pagesNumber + ') / (' + (pagesNumber - 1) + '))'
                        }}
                    >
                        {idx + 1}
                    </span>
                ))}
            </div>
            <li>
                <button
                    onClick={handleNext}
                    disabled={currentPage === pagesNumber - 1}
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        border: 'none',
                        background: '#bdbdbd',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginLeft: 16,
                        cursor: currentPage === pagesNumber - 1 ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    aria-label="Next page"
                >
                    {"->"}
                </button>
            </li>
        </ol>
    </div>
)
}

export default PagerForm