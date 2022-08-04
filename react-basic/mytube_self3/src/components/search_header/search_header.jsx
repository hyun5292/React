import React, { memo } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo((props) => {
    const inputRef = React.createRef();
    
    const handleSearch = (e) => {
        e.preventDefault();
        const keyword = inputRef.current.value;
        keyword && props.onSearch(keyword);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Mytube</h1>
            </div>
            <form className={styles.form} onSubmit={handleSearch}>
                <input
                    ref={inputRef}
                    className={styles.input}
                    type="search"
                    placeholder="Search..." 
                />
                <button className={styles.button} type="submit">
                    <img className={styles.buttonImg} src="/images/search.png" alt="search" />
                </button>
            </form>
        </header>
    )
});

export default SearchHeader;