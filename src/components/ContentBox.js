import React from 'react';
import PropTypes from 'prop-types';

const ContentBox = ({ type = '', children }) => (
    <section className={`contentBox ${type ? 'contentBox--'+type : ''}`}>
        <div className="contentBox__container">
            {children && children}
        </div>
    </section>
);

ContentBox.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default ContentBox;