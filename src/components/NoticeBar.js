import React from 'react';
import PropTypes from 'prop-types';

const NoticeBar = ({ noticeType, message }) => (
    <aside className={`noticeBar ${noticeType ? 'noticeBar--'+noticeType : ''}`} role="alert">
        <div className="noticeBar__container">
            <p className="noticeBar__message">
                <span className="noticeBar__status">{`Status: `}</span>
                {message}
            </p>
        </div>
    </aside>
);

NoticeBar.propTypes = {
    status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default NoticeBar;