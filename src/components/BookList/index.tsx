import React from "react";
import BookCard from "../BookCard";
import styles from "./bookList.module.css";

interface Props {
    books: Book[];
}

const BookList: React.FC<Props> = ({ books }) => {
    return (
        <div className={styles.container}>
            {books.map(book => (
                <BookCard book={book} key={book.id} />
            ))}
        </div>
    );
};

export default BookList;
