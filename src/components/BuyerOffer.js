import React from 'react';
import PropTypes from 'prop-types';

// Components
import Price from './Price';
import DateAndTime from './DateAndTime';

const BuyerOffer = ({ offer }) => (
    <div className="buyerOffer">
        <span  className="buyerOffer__price"><Price value={offer.amount} /></span>
        <small className="buyerOffer__qualify">{'Subject to offer qualification by Purplebricks'}</small>
        <div className="buyerAction">
            <button className="buyerOffer__comments">{'View Comments'}</button>
            <DateAndTime date={offer.dateMade} time={offer.timeMade} uniqueClassName="buyerOffer__dateAndTime" />
        </div>
    </div>

);

BuyerOffer.propTypes = {
    offer: PropTypes.object.isRequired
};

export default BuyerOffer;