import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const Price = ({ value }) => (
    <NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'£'}/>
);

Price.propTypes = {
    value: PropTypes.number.isRequired
};

export default Price;