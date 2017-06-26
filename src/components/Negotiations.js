import React from 'react';
import PropTypes from 'prop-types';

// Components
import PriceInput from './PriceInput';

const ReNegotiations = ({
    defaultPrice,
    negotiator,
    submitForm,
    updateTotal,
    showMessage
}) => (
    <div className="reNegotiation">

        {negotiator.hasAgent &&
        <div className="reNegotiation__thirdParty thirdPartyNegotiate">
            <div className="thirdPartyNegotiate__info">
                <p>{`Would you like your Expert, ${negotiator.agentName}, to negotiate on your behalf? It’s completely free!`}</p>
            </div>
            <div className="thirdPartyNegotiate__submission">
                <button className="thirdPartyNegotiate__submit">{`Negotiate for me`}</button>
            </div>
        </div>
        }

        <div className="reNegotiation__form reNegotiationForm">
            <h2 className="reNegotiationForm__heading">{'Enter an offer you would be willing to accept'}</h2>
            <div className="reNegotiationForm__form">
                <div className="reNegotiationForm__row">
                    <PriceInput defaultValue={defaultPrice} updateTotal={updateTotal} />
                    <button
                        className="reNegotiationForm__submit"
                        onClick={() => submitForm()}
                    >
                        {'Submit Offer'}
                    </button>
                    {showMessage &&
                        <span className="message message--error">{'Show Error Message'}</span>
                    }
                </div>
                <div className="reNegotiationForm__row">
                    <button className="reNegotiationForm__comments">{'Add Comments'}</button>
                </div>
            </div>
        </div>
    </div>
);

ReNegotiations.propTypes = {
    defaultPrice: PropTypes.number
};

export default ReNegotiations;