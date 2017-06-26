import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({
    title = '',
    status = '',
    isAccordion,
    toggleAccordion,
    showAccordion
}) => (
    <header className={`sectionTitle ${status ? 'sectionTitle--'+status : ''}`}>
        <h2 className="sectionTitle__title">{title}</h2>
        {isAccordion &&
            <span
                className={`sectionTitle__accordion accordion__toggle ${showAccordion ? 'accordion__toggle--hide' : 'accordion__toggle--show'}`}
                onClick={() => toggleAccordion()}
            >
                {showAccordion ? (
                    <span>Hide</span>
                ) : (
                    <span>Show</span>
                )}
            </span>
        }
        <hr/>
    </header>
);

SectionTitle.propTypes = {
    status: PropTypes.string,
    title: PropTypes.string
};

export default SectionTitle;

