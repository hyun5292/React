import React, { Component } from 'react'
import styles from '../css/video.module.css';

class Video extends Component {
  handleDetail = (video) => {
    
  };

  render() {
    const i = this.props.i;

    return (
      <div 
        className={styles.video}
        onclick={this.handleDetail}
      >
        <img 
            className={styles.video_img} 
            src={i.snippet.thumbnails.high["url"]} 
            alt="비디오 썸네일 이미지"
        />
        <div className={styles.video_info}>
            <span className={styles.video_info_title}>
              {i.snippet.localized["title"]}
            </span>
            <span className={styles.video_info_singer}>
              {i.snippet.localized["description"]}
            </span>
        </div>
      </div>
    )
  }
}

export default Video;