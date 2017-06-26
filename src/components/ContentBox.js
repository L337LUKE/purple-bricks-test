import React from 'react';
import PropTypes from 'prop-types';

// Components
import SectionTitle from '../components/SectionTitle';

const ContentBox = ({
    width = '',
    status = '',
    uniqueClassName = '',
    title = '',
    isAccordion = false,
    showAccordion = true,
    toggleAccordion,
    children,
}) => (
    <section className={`contentBox ${width ? 'contentBox--'+width : ''} ${status ? 'contentBox--'+status : ''} ${uniqueClassName} `}>
        <div className="contentBox__container">
            <SectionTitle
                title={title}
                status={status}
                isAccordion={isAccordion}
                toggleAccordion={toggleAccordion}
                showAccordion={showAccordion}
            />
            {isAccordion ? (
                <div className={`accordion ${!showAccordion ? 'accordion--hide' : ''}`}>
                    {children && children}
                </div>
                ) : (
                children ? children : ''
            )}
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