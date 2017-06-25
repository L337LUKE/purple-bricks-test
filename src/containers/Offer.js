import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Components
import Container from '../components/Container';
import ContentBox from '../components/ContentBox';
import NoticeBar from '../components/NoticeBar';
import SectionTitle from '../components/SectionTitle';
import PropertyInfo from '../components/PropertyInfo';
import BuyerInfo from '../components/BuyerInfo';

import { property, buyer } from '../mock/offer-data';

class Offer extends Component {

    render() {
        return (
            <Container>
                <NoticeBar status="alert" message="Withdrawn" />

                <ContentBox status="highlight">
                    <SectionTitle title="The Property" />
                    <PropertyInfo details={property} />
                </ContentBox>

                <ContentBox uniqueClassName="buyerDetails">
                    <SectionTitle title="Buyer's Details" />
                    <BuyerInfo buyer={buyer} />
                </ContentBox>

                <ContentBox width="half" uniqueClassName="buyerOffer">
                    <SectionTitle title="Buyers Offer" />
                </ContentBox>

                <ContentBox status="alert" width="half" uniqueClassName="buyerResponse">
                    <SectionTitle title="Your Response" status="alert" />
                </ContentBox>

                <ContentBox uniqueClassName="buyerNegotiations">
                    <SectionTitle title="Re-open negotiations" />
                </ContentBox>
            </Container>
        );
    }
}

// Offer.propTypes = {

// };

export default Offer;