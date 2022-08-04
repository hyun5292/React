import React, { Component } from 'react';
import Video from './video';
import styles from '../css/videos.module.css';

class Videos extends Component {
    render() {
        const playList = this.props.playList;
        
        return (
            <div className={styles.videos_ul}>
                {playList && playList.map((video) => {
                        <Video video={video} />
                })}
            </div>
        );
    }
}

export default Videos;