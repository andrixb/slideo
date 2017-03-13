import React from 'react';

import style from './VideoPlayer.scss';


class VideoPlayer extends React.Component {
    render() {
        return (
            <video className="videoplayer__base"width={this.props.width} height={this.props.height} controls>
                <source src={this.props.src} />
                Your browser does not support the video tag.
            </video>
        );
    }
}

export default VideoPlayer;
