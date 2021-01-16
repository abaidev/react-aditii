import React from 'react';

import Header from './js/Header';
import Banner from './js/Banner';
import BlockElement from './js/BlockElement';
import Footer from './js/Footer';

import './css/slick.css';
import './css/slick-theme.css';
import './css/styles.css';
import './css/media.css';


class App extends React.Component {
   constructor(props) {
      super(props);
   }

   render(props) {
      return (
         <div className="root-wrap">
            <h2 hidden>So be it. 2020/01/21 - 11:50 </h2>
            <Header/>
            <Banner/>
            <BlockElement id="sale-block" cls="never" sectionTitle="Sales" category="sale"/>
            <BlockElement id="wallet-block" cls="wallet" sectionTitle="wallets" category="wallet"/>
            <BlockElement id="shirt-block" cls="shirt" sectionTitle="shirt" category="shirt"/>
            <BlockElement id="shoes-block" cls="shoes" sectionTitle="shoes" category="shoes"/>
            <BlockElement id="coat-block" cls="vintage" sectionTitle="vintage" category="coat"/>
            <Footer/>
         </div>
      )
   }
}

export default App;
