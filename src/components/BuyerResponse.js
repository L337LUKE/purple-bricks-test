import React from 'react';
import PropTypes from 'prop-types';
import DateAndTime from './DateAndTime';

const BuyerResponse = ({ offer }) => (
    <div className="buyerResponse">
        <h3 className="buyerResponse__title">{`You have withdrawn your acceptance of the offer`}</h3>
        <div className="buyerAction">
            <button>{'View Comments'}</button>
            <DateAndTime date={offer.dateMade} time={offer.timeMade} uniqueClassName='buyerResponse__dateAndTime'/>
        </div>
    </div>
);

BuyerResponse.propTypes = {
    offer: PropTypes.object.isRequired
};

export default BuyerResponse;