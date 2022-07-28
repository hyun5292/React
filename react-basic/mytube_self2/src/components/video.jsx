import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import styles from '../css/video.module.css';

class Video extends Component {
  handleDetail = withRouter(({ history }) => {
    console.log("ㅠㅠ");
    history.push(`/detail/:${this.props.video}`);
  });

  render() {
    return (
      <div 
        className={styles.video}
        onClick={this.handleDetail}
      >
        <img 
            className={styles.video_img} 
            src={this.props.video.snippet.thumbnails.high["url"]} 
            alt="비디오 썸네일 이미지"
        />
        <div className={styles.video_info}>
            <span className={styles.video_info_title}>
              {this.props.video.snippet.localized["title"]}
            </span>
            <span className={styles.video_info_singer}>
              {this.props.video.snippet.localized["description"]}
            </span>
        </div>
      </div>
    )
  }
}

export default Video;