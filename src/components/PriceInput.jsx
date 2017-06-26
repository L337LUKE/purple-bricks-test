import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

class PriceInput extends Component {
    render() {

        let { defaultValue, updateTotal } = this.props;

        return (
            <div className="priceInput">
                <span className="priceInput__currency">{'£'}</span>
                <label className="priceInput__label priceInput__label--a11yHide" htmlFor="negotiatedOffer">{'Your re-negotiated offer'}</label>
                <NumberFormat
                    id="negotiatedOffer"
                    name="negotiatedOffer"
                    className="priceInput__input"
                    thousandSeparator={true}
                    value={defaultValue}
                    allowNegative={false}
                    onChange={(e, value) => updateTotal(Number(value))}
                />
            </div>
        );
    }
};

PriceInput.propTypes = {
    defaultValue: PropTypes.number.isRequired
};

export default PriceInput;