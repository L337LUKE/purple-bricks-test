import React from 'react';
import PropTypes from 'prop-types';

const LinkList = ({links, uniqueClassName = ''}) => (
    <ul className={`linkList ${uniqueClassName}`}>
        {links.map((link, index) => (
            <li className="linkList__item" key={index}>
                <a className="linkList__link" href={link.url}>{link.name}</a>
            </li>
        ))}
    </ul>
);

LinkList.propTypes = {
    uniqueClassName : PropTypes.string,
    links : PropTypes.array.isRequired
};

export default LinkList;
