import React from 'react';
import PropTypes from 'prop-types';

const ContentBox = ({
    width = '',
    status = '',
    uniqueClassName = '',
    children
}) => (
    <section className={`contentBox ${width ? 'contentBox--'+width : ''} ${status ? 'contentBox--'+status : ''} ${uniqueClassName} `}>
        <div className="contentBox__container">
            {children && children}
        </div>
    </section>
);

ContentBox.propTypes = {
    uniqueClassName: PropTypes.string,
    status: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default ContentBox;