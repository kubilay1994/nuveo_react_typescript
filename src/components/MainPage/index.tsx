import React, { useEffect, useState } from 'react';

import axios from 'axios';

import BookList from '../BookList';

import ReactPaginate from 'react-paginate';
import styles from './mainPage.module.css';

import Button from '../Button';

import { RouteComponentProps } from '@reach/router';

const mockAPIUrl = 'https://5e3128eb576f9d0014d64446.mockapi.io/api';

const MainPage: React.FC<RouteComponentProps<{}>> = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchedText, setSearchedText] = useState<string>('');

    useEffect(() => {
        // Her seferinde ilk sayfaya dönmek yerine en hangi sayfada olduğumuz verisi global bir state de tutulabilirdi
        fetchBooks(1);
    }, []);

    const fetchBooks = async (page: number) => {
        try {
            const res = await axios.get(`${mockAPIUrl}/books`, {
                params: {
                    page,
                    limit: 6,
                    sortBy: 'createdAt',
                    order: 'desc'
                }
            });
            setBooks(res.data);
        } catch (error) {
            // console.log(error);
        }
    };

    const searhBooks = async (search: string) => {
        setLoading(true);
        try {
            const res = await axios.get(`${mockAPIUrl}/books`, {
                params: {
                    sortBy: 'createdAt',
                    order: 'desc',
                    search
                }
            });
            setBooks(res.data);
        } catch (error) {
            // console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = async ({ selected }: { selected: number }) => {
        await fetchBooks(selected + 1);
    };

    return (
        <>
            <p className={styles.searchInfo}>
                Kitap veri setinden istenilen parametreye göre arama{' '}
            </p>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    value={searchedText}
                    onChange={e => setSearchedText(e.target.value)}
                    className={styles.input}
                />

                <Button
                    onClick={() => searhBooks(searchedText)}
                    disabled={loading}
                    buttonClass={styles.btn}
                >
                    {loading ? 'Loading...' : 'Ara'}
                </Button>
            </div>
            <div>
                <BookList books={books} />
            </div>

            <ReactPaginate
                pageCount={10} // Hesaplanıp öyle de atanabilirdi
                pageRangeDisplayed={4}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                previousLabel="← Previous"
                nextLabel="Next →"
                breakLabel=" ... "
                containerClassName={styles.pagination}
                pageLinkClassName={styles.pageLink}
                previousLinkClassName={styles.previousPage}
                disabledClassName={styles.disabled}
                activeLinkClassName={styles.active}
                pageClassName={styles.page}
                nextLinkClassName={styles.previousPage}
            />
        </>
    );
};

export default MainPage;
