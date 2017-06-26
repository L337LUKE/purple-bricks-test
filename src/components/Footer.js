import React from 'react';

// Mock
import { socialData as data } from '../mock/social-data';
import { links } from '../mock/link-list';

// Components
import SocialLinks from './SocialLinks';
import SocialLink from './SocialLink';
import LinkList from './LinkList';
import Container from './Container';

const Footer = () => (
    <footer className="footer">
        <Container uniqueClassName="footer__container">
            <LinkList links={links} uniqueClassName="footer__linkList" />
            <SocialLinks uniqueClassName="footer__socialLinks">
                {data.map((social, index) => (
                    <SocialLink name={social.name} url={social.url} key={index} />
                ))}
            </SocialLinks>
        </Container>
    </footer>
);

export default Footer;