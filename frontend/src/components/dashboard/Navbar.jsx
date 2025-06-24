import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({setState}) => (
    <nav
        style={{
            width: '100vw',
            height: '60px',
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 0',
            marginTop: '43px',
            zIndex: 100,
        }}
    >
        <button
            onClick={setState}
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px',
                color: '#333',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                marginRight: '16px',
            }}
        >
            <FaBars />
        </button>
        <span style={{ 
            fontWeight: 'bold',
            fontSize: '1.2rem',
            color: '#333' }}>
            Personality Dataset Manager
        </span>
    </nav>
);

export default Navbar;