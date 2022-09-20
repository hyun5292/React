import React from 'react';
import styles from './image_file_input.module.css';

const ImageFillInput = ({ fileName, fileURL }) => {
    return (
        <button
            className={`${styles.ImgFile} ${CheckImg(fileName)}`}
        >{fileName ? fileName : 'No file'}</button>
    );
};

function CheckImg(fileName) {
    if (fileName)
        return styles.NotNull;
    else
        return styles.YesNull;
};

export default ImageFillInput;