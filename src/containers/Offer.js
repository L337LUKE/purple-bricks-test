import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Components
import Container from '../components/Container';
import ContentBox from '../components/ContentBox';
import NoticeBar from '../components/NoticeBar';
import SectionTitle from '../components/SectionTitle';

class Offer extends Component {
    render() {
        return (
            <Container>
                <NoticeBar status="alert" message="Withdrawn" />

                <ContentBox>
                    <SectionTitle title="The Property" />
                </ContentBox>

                <ContentBox>
                    <SectionTitle title="Buyer's Details" />
                </ContentBox>

                <ContentBox width="half">
                    <SectionTitle title="Buyers Offer" />
                </ContentBox>

                <ContentBox status="alert" width="half" >
                    <SectionTitle title="Your Response" status="alert" />
                </ContentBox>

                <ContentBox>
                    <SectionTitle title="Re-open negotiations" />
                </ContentBox>
            </Container>
        );
    }
}

// Offer.propTypes = {

// };

export default Offer;