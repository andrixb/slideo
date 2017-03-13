import React from 'react';
import style from './App.scss';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx';
import MediaList from '../../components/MediaList/MediaList.jsx';
import Button from '../../components/Button/Button.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="app__base">
                <div className="app__video">
                    <div className="videoplayer__container">
                        <VideoPlayer width="686" height="300" src="https://www.youtube.com/watch?v=eWLWOSgYlG8" />
                        <VideoPlayer width="686" height="300" src="https://www.youtube.com/watch?v=eWLWOSgYlG8" />
                    </div>
                    <div className="button__container">
                        <Button class="button__element" text="Insert Slide" />
                    </div>
                </div>
                <div className="app__medialist">
                    <MediaList item="Example File" />
                    <div className="button__container">
                        <Button class="button__element" text="Load Slides" />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
