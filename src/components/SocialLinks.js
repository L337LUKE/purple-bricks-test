import React from 'react';
import PropTypes from 'prop-types';

const SocialLinks = ({children, uniqueClassName}) => {
    return (
       <ul className={`socialLinks ${uniqueClassName}`}>
           {children && children}
       </ul>
    )
};

SocialLinks.propTypes = {
    children: PropTypes.node.isRequired
};

export default SocialLinks;