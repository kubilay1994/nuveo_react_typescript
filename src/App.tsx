import React from 'react';

import { Router } from '@reach/router';

import MainPage from './components/MainPage';
import Header from './components/Header';
import Form from './components/Form';
import BookDetails from './components/BookDetails';

import './App.css';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Router>
                <MainPage path="/" />
                <Form path="/create" />
                <BookDetails path="/detail/:id" />
            </Router>
        </>
    );
};

export default App;
