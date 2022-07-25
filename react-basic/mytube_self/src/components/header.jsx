import React, { Component } from 'react';
import styles from '../css/header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.logo_img} src={"images/logo.png"} alt="유튜브 로고" /> 
                    <div className={styles.logo_text}>Mytube</div>   
                </div>  
                <div className={styles.search}>
                    <input className={styles.search_input} type="text" placeholder='Search...' />
                    <button className={styles.search_btn}>
                        <img className={styles.search_btn_img} src={"images/search.png"} alt="검색 이미지" />
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;