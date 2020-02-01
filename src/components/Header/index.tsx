import React from 'react';
import styles from './header.module.css';

import { navigate } from '@reach/router';

const Header: React.FC = () => {
    return (
        <>
            <header className={styles.container}>
                <div className={styles.title}>Book Store</div>
                <button
                    className={styles.button}
                    onClick={() => navigate('/create')}
                >
                    Yeni Kitap Ekle
                </button>
            </header>
            <div className={styles.h} />
        </>
    );
};

export default Header;
