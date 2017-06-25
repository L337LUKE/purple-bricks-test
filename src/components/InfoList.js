import React from 'react';
import PropTypes from 'prop-types';

const InfoList = ({ list }) => (
    <ul className="infoList">
        {list.map((item, index) => (
            <li className="infoList__item" key={index}><span>{item.descriptor}: </span>{item.value}</li>
        ))}
    </ul>
);

InfoList.propTypes = {
    list: PropTypes.array.isRequired
};

export default InfoList;