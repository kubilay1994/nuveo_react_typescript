import React from 'react';
import styles from './bookCard.module.css';
import { navigate } from '@reach/router';

interface Props {
    book: Book;
}

const BookCard: React.FC<Props> = ({ book }) => {
    return (
        <div
            className={styles.container}
            onClick={() => {
                navigate(`/detail/${book.id}`, {
                    state: {
                        book
                    }
                });
            }}
        >
            {book.image && (
                <img src={book.image} alt="Book" className={styles.img} />
            )}

            <div className={styles.info}>
                <h3>{book.title}</h3>
                <small>{book.author}</small>
                <small>{book.publisher}</small>
                <div className={styles.price}>{`₺${book.price}`}</div>
            </div>
        </div>
    );
};

export default BookCard;
