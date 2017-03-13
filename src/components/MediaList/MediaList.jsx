import React from 'react';

import style from './MediaList.scss';


class MediaList extends React.Component {
    render() {
        return (
            <ul className="medialist__list">
                <li className="medialist__item">{this.props.item}</li>
            </ul>
        );
    }
}

export default MediaList;
