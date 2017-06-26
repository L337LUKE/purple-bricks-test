import React from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './layout/Main';

const App = ({ children }) => (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
);

export default App;
