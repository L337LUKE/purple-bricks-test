import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({title = '', status = ''}) => (
    <header className={`sectionTitle ${status ? 'sectionTitle--'+status : ''}`}>
        <h2 className="sectionTitle__title">{title}</h2>
        <hr/>
    </header>
);

SectionTitle.propTypes = {
    status: PropTypes.string,
    title: PropTypes.string
};

export default SectionTitle;