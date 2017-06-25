import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';

const BuyerOffer = ({ offer }) => (
    <div className="buyerOffer">
        <span  className="buyerOffer__price"><Price value={offer.amount} /></span>
        <small className="buyerOffer__qualify">{'Subject to offer qualification by Purplebricks'}</small>
        <button className="buyerOffer__comments">{'View Comments'}</button>
        <time className="buyerOffer__dateTime" datetime="2013-10-24T20:17">
            <span>{`Date: ${offer.dateMade}`}</span>
            <span>{`Time: ${offer.timeMade}`}</span>
        </time>
    </div>

);

BuyerOffer.propTypes = {

};

export default BuyerOffer;