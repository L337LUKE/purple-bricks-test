import React from 'react';
import PropTypes from 'prop-types';

import InfoList from './InfoList';

const BuyerInfo = ({ buyer }) => (
    <InfoList list={buyer.details} />
);

BuyerInfo.propTypes = {
    buyer: PropTypes.object.isRequired
};

export default BuyerInfo;