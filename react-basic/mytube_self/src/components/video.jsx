import React, { Component } from 'react'
import styles from '../css/video.module.css';

class Video extends Component {
  
  render({ video, video: { snippet }, display }) {
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
      <div className={styles.video}>
        <img 
            className={styles.video_img} 
            src={snippet.thumbnails.medium.url} 
            alt="비디오 썸네일 이미지"
        />
        <div className={styles.video_info}>
            <span className={styles.video_info_title}>
              {snippet.title}
            </span>
            <span className={styles.video_info_singer}>
              {snippet.channelTitle}
            </span>
        </div>
      </div>
    )
  }
}

export default Video;