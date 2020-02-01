import React from 'react';
import styles from './bookDetails.module.css';

import Button from '../Button';
import { RouteComponentProps } from '@reach/router';

const BookDetails: React.FC<RouteComponentProps<{}>> = ({
    location,
    navigate
}) => {
    const book = (location?.state as { book?: Book })?.book;
    return book ? (
        <div className={styles.container}>
            {book.image && (
                <img src={book.image} alt="Book" className={styles.img} />
            )}

            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <label htmlFor="title">Kitap Adı: </label>
                    <div id="title">{book.title}</div>
                </div>
                <div className={styles.info}>
                    <label htmlFor="author">Kitabın Yazarı : </label>
                    <div id="author">{book.author}</div>
                </div>
                <div className={styles.info}>
                    <label htmlFor="publisher">Yayınevi :</label>
                    <div id="publisher">{book.publisher}</div>
                </div>
                <div className={styles.info}>
                    <label htmlFor="price">Kitabın Fiyatı : </label>
                    <div id="price">{book.price + ' Türk Lirası'}</div>
                </div>
                <div className={styles.info}>
                    <label htmlFor="createdAt">Eklenme Tarihi : </label>
                    <div id="createdAt">
                        {new Date(book.createdAt).toLocaleString()}
                    </div>
                </div>
            </div>
            <Button
                type="button"
                color="red"
                buttonClass={styles.btn}
                onClick={() => {
                    if (navigate) {
                        navigate('/');
                    }
                }}
            >
                Geri
            </Button>
        </div>
    ) : null;
};

export default BookDetails;
