import React, { Component } from 'react';

/**
 * This component is classed as a HOC (Higher order Component)
 * I would usually abstract a lot of the logic here into reducer
 * functions with Redux rather than using Reacts state methods directly
 *
 * The functions within the Offer class are passed to the
 * render method, which in turn are passed as props to the child
 * components for them to use which affect the state of the HOC,
 * meaning it can then distribute changes more effectively.
 *
 * The aim of the child components is that they are dumb, they just accept props
 * and show data, they aren't responsible for the logic of the application.
 */

// Components
import Container from '../components/Container';
import NoticeBar from '../components/NoticeBar';
import BuyerInfo from '../components/BuyerInfo';
import ContentBox from '../components/ContentBox';
import BuyerOffer from '../components/BuyerOffer';
import PropertyInfo from '../components/PropertyInfo';
import Negotiations from '../components/Negotiations';
import BuyerResponse from '../components/BuyerResponse';

// Mock Data
import { property, buyer, buyerOffer, buyerResponse, negotiator } from '../mock/offer-data';

class Offer extends Component {

    constructor(props) {
        super();

        // Set our default state
        this.state = {
            negotiatedPrice: buyerOffer.amount,
            showError: false,
            accordionShow: true
        }
    }

    toggleAccordion = () => {
        this.setState({ accordionShow : !this.state.accordionShow })
    }

    submitForm = () => {
        if (this.state.negotiatedPrice <= 0) {
            this.setState({ showError: true });
        } else {
            this.setState({ showError: false});
            console.log({ negotiatedPrice : this.state.negotiatedPrice });
        }
    }

    updateTotal = (value) => {
        this.setState({ negotiatedPrice: value });

        if (value) {
            this.setState({ showError: false });
        }
    }


    render() {
        return (
            <Container>
                <NoticeBar status="alert" message="Withdrawn" />

                <ContentBox status="highlight" title="The Property">
                    <PropertyInfo details={property} />
                </ContentBox>

                <ContentBox
                    uniqueClassName="buyerDetails"
                    isAccordion={true}
                    title="Buyer's Details"
                    toggleAccordion={this.toggleAccordion}
                    showAccordion={this.state.accordionShow}
                >
                    <BuyerInfo buyer={buyer} />
                </ContentBox>

                <ContentBox
                    width="half"
                    uniqueClassName="buyerOffer"
                    title="Buyers Offer"
                >
                    <BuyerOffer offer={buyerOffer} />
                </ContentBox>

                <ContentBox
                    status="alert"
                    width="half"
                    uniqueClassName="buyerResponse"
                    title="Your Response"
                >
                    <BuyerResponse offer={buyerResponse} />
                </ContentBox>

                <ContentBox
                    uniqueClassName="buyerNegotiations"
                    status="highlight"
                    title="Re-open negotiations"
                >
                    <Negotiations
                        defaultPrice={this.state.negotiatedPrice}
                        negotiator={negotiator}
                        submitForm={this.submitForm}
                        updateTotal={this.updateTotal}
                        showError={this.state.showError}
                    />
                </ContentBox>
            </Container>
        );
    }
}

export default Offer;