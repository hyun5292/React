import React, { Component } from 'react';

class Videos extends Component {
    
    render({ videos, display }) {
        return (
            <ul>
                {videos.map((video) => (
                    <vidoe 
                        key={video.id}
                        video={video}
                        display={display}
                    />
                ))}
            </ul>
        );
    }
}

export default Videos;