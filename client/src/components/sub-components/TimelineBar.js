import React from 'react'
import Radium from 'radium'
import moment from 'moment'

class TimelineBar extends React.Component {
    render() {
        const date = moment(this.props.timestamp);
        const diffWithNow = -moment().diff(date, 'days');
        let remaining = Math.abs(diffWithNow) + ' days';
        if (Math.abs(diffWithNow) > 30) remaining = '~' + Math.floor(Math.abs(diffWithNow) / 30) + ' months';
        remaining += diffWithNow < 0 ? ' ago' : ' to go';
        if (diffWithNow === 0) remaining = 'today';
        const left = (diffWithNow / 60 * 50) + 50;
        const containerStyle = {left: left + '%'};
        let containerClassNotActive = null;
        if (!this.props.active) containerClassNotActive = "timeLineBar--inActive";
        return (
            <div className={`timeLineBar ${containerClassNotActive}`} style={containerStyle} onClick={() => this.props.onClick()}>
                <div className="timeLineBar__downBar">
                    <span className="timeLineBar__downBar-date">{ date.format('ll').split(',')[0] }</span>
                    <span className="timeLineBar__downBar-remaining">{ remaining }</span>
                </div>
                <div className="timeLineBar__clickArea" />
            </div>
        )
    }
}

export default Radium(TimelineBar)