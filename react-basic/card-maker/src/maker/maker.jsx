import React, { useEffect } from 'react';
import styles from './maker.module.css';
import Header from './../component/header/header';
import Footer from './../component/footer/footer';
import { useHistory } from 'react-router-dom';

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

            <Footer />
        </section>
    );           
};

export default Maker;