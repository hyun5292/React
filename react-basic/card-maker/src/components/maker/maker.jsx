import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Grog',
            company: 'LG',
            theme: 'light',
            title: 'Front Developer',
            email: 'tytyjacob@naver.com',
            message: 'I am Grog',
            fileName: 'Grog',
            fileURL: 'url'
        },
        {
            id: '2',
            name: 'Grog',
            company: 'LG',
            theme: 'light',
            title: 'Front Developer',
            email: 'tytyjacob@naver.com',
            message: 'I am Grog',
            fileName: 'Grog',
            fileURL: 'url'
        },
        {
            id: '3',
            name: 'Grog',
            company: 'LG',
            theme: 'light',
            title: 'Front Developer',
            email: 'tytyjacob@naver.com',
            message: 'I am Grog',
            fileName: 'Grog',
            fileURL: 'url'
        },
    ]);
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) { 
                navigate('/');
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
                <div className={styles.container}>
                    <Editor cards={cards} />
                    <Preview cards={cards} />
                </div>
            <Footer />
        </section>
    );
};

export default Maker;