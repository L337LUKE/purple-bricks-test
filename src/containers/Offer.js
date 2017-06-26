import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Components
import Container from '../components/Container';
import ContentBox from '../components/ContentBox';
import NoticeBar from '../components/NoticeBar';
import SectionTitle from '../components/SectionTitle';
import PropertyInfo from '../components/PropertyInfo';
import BuyerInfo from '../components/BuyerInfo';
import BuyerOffer from '../components/BuyerOffer';
import BuyerResponse from '../components/BuyerResponse';
import Negotiations from '../components/Negotiations';

import { property, buyer, buyerOffer, buyerResponse, negotiator } from '../mock/offer-data';

class Offer extends Component {

    constructor(props) {
        super();

        // Set our default state
        this.state = {
            negotiatedPrice: buyerOffer.amount,
            showMessage: false
        }
    }

    submitForm = () => {
        if (this.state.negotiatedPrice <= 0) {
            this.setState({ showMessage: true });
        } else {
            this.setState({ showMessage: false});
        }

        console.log(this.state);
    }

    updateTotal = (value) => {
        this.setState({ negotiatedPrice: value })

        if (value) {
            this.setState({ showMessage: false });
        }
    }


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
                    <BuyerOffer offer={buyerOffer} />
                </ContentBox>

                <ContentBox status="alert" width="half" uniqueClassName="buyerResponse">
                    <SectionTitle title="Your Response" status="alert" />
                    <BuyerResponse offer={buyerResponse} />
                </ContentBox>

                <ContentBox uniqueClassName="buyerNegotiations" status="highlight">
                    <SectionTitle title="Re-open negotiations" />
                    <Negotiations
                        defaultPrice={this.state.negotiatedPrice}
                        negotiator={negotiator}
                        submitForm={this.submitForm}
                        updateTotal={this.updateTotal}
                        showMessage={this.state.showMessage}
                    />
                </ContentBox>
            </Container>
        );
    }
}

export default Offer;