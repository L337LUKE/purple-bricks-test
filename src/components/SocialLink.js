import React from 'react';

import socialSprite from '../assets/social-sprite.png';

const styles = {
    backgroundImage: `url(${socialSprite})`
};

const SocialLink = ({name, url}) => (
    <li className="socialLinks__item">
        <a className="socialLinks__link" href={url}>
            <span className="socialLinks__screenReader">{name}</span>
            <i style={styles} className={`socialLinks__icon socialLinks__icon--${name.toLowerCase()}`}></i>
        </a>
    </li>
);
export default SocialLink;