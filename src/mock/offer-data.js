import image from '../assets/house.jpg';

export const property = {
    image: {
        alt: 'Image of property Eddington House, 16 Wigginton Road, Tamworth, B79 8PB',
        src: image,
    },
    name: 'Eddington House, 16 Wigginton Road, Tamworth, B79 8PB',
    price: 189950,
    extras : [
        {
            name: "Extra one",
            price: 200
        }, {
            name: "Extra two",
            price: 300
        }, {
            name: "Extra Three",
            price: 400
        }
    ]
};

export const buyer = {
    details:[
        {
            descriptor: 'Name',
            value: 'Mr David Shepherd'
        }, {
            descriptor: 'Buying position',
            value: 'Property to sell - 20 weeks on the market'
        }, {
            descriptor: 'Financial Position',
            value: 'Mortgate required - approved'
        }, {
            descriptor: 'Timescale',
            value: 'would like to move in 10 weeks - no chain'
        }
    ]
};


export const buyerOffer = {
    amount: 179000,
    dateMade: '24/10/2013',
    timeMade: '20:17'
};

export const buyerResponse = {
    dateMade: '24/10/2013',
    timeMade: '21:05'
};

export const negotiator = {
    hasAgent: true,
    agentName: 'Robert White'
};