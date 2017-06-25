import React from 'react';
import PropTypes from 'prop-types';

// Components
import Price from './Price';

const PropertyBrief = ({
   details = {},
}) => {

    const { image, name, price, extras } = details;

    return (
        <article className="propertyInfo">
            <div className="propertyInfo__overview">
                <div className="propertyInfo__image">
                    <img src={image.src} alt={image.alt} width="120" height="80" />
                </div>
                <div className="propertyInfo__name">
                    <p>{name}</p>
                </div>
            </div>
            <div className="propertyInfo__pricing">
                <p className="propertyInfo__askingPrice">Asking Price:</p>
                <h3 className="propertyInfo__price"><Price value={price} /></h3>
                <button className="propertyInfo__offers">View Extras Included</button>
            </div>
        </article>
    );
};

PropertyBrief.propTypes = {
    details: PropTypes.object.isRequired
};

export default PropertyBrief;