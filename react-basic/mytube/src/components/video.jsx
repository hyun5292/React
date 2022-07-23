import React, { Component } from 'react'
import styles from '../css/video.module.css';

class Video extends Component {
  render() {
    return (
      <div className={styles.video}>
        <img 
            className={styles.video_img} 
            src={"images/sample.png"} 
            alt="비디오 썸네일 이미지"
        />
        <div className={styles.video_info}>
            <span className={styles.video_info_title}>
                Dune Official Trailer
            </span>
            <span className={styles.video_info_singer}>
                Warner Bros. Pictures
            </span>
        </div>
      </div>
    )
  }
}

export default Video;