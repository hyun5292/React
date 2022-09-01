import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';
import Header from './../component/header/header';
import Footer from './../component/footer/footer';
import Card from './card/card';
import Preview from './preview/preview';

const Maker = ({ authService }) => {
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
                window.location.reload();
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
                <div className={styles.comp}>
                    <Card />
                    <Preview />
                </div>
            <Footer />
        </section>
    );           
};

export default Maker;