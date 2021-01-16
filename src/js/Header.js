import React from "react";
import Search from './Search';

function Header(props) {
   return (
      <div className="header header-top" id="header-block">

         <div className="container">
            <ul className="nav nav-pills nav-fill align-items-center align-content-center">
               <li className="nav-item nav-item-logo">
                  <a className="nav-elem logo" href="#sliderBlock">Aditii</a>
               </li>
               <li className="nav-item nav-item-search">
                  <Search/>
               </li>
               <li className="nav-item nav-item-credit">
                  <a className="nav-elem credit" href="#">$ <span id="cart">0</span></a>
               </li>
               <li className="nav-item nav-item-source">
                  <a target="_blank" className="nav-elem code" href="https://github.com/abaidev/react-aditii/">
                     Source
                     <br/>Code
                  </a>
               </li>
            </ul>
         </div>

         <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">

               <button className="navbar-toggler" type="button" data-toggle="collapse"
                       data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                       aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto justify-content-between">
                     <li className="nav-item">
                        <a className="nav-link" href="#sliderBlock">Home<span className="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#sale-block">Sale</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#wallet-block">Wallets</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#shirt-block">Shirts</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#shoes-block">Shoes</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#coat-block">Vintage</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#footer-block">Contact us</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Header;