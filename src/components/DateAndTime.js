import React from 'react';
import PropTypes from 'prop-types';

const DateAndTime = ({ date, time, uniqueClassName }) => (
    <time className={`dateAndTime ${uniqueClassName}`} dateTime="2013-10-24T20:17">
        <span>{`Date: ${date}`}</span>
        <span>{`Time: ${time}`}</span>
    </time>

);

DateAndTime.propTypes = {
    date: PropTypes.string,
    time: PropTypes.string,
    uniqueClassName: PropTypes.string
};

export default DateAndTime;