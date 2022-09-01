import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
    return (
        <section className={styles.card}>
            <h2 className={styles.title}>Card Maker</h2>
        </section>
    );
};

export default Card;