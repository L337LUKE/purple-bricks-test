import React from 'react';
import PropTypes from 'prop-types';

const PriceInput = ({ defaultValue }) => (
    <div className="priceInput">
        <span className="priceInput__currency">£</span>
        <input className="priceInput__input" type="text" />
    </div>    
);

PriceInput.propTypes = {
    defaultValue: PropTypes.number.isRequired
};

export default PriceInput;