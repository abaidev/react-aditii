import React from "react";
import BlockItem from './BlockItem';
import productList from '../db/products';


class SliderItem extends BlockItem{
   constructor(props){
      super(props);
   }
   render() {
      return(
         <div className="slider-item clearfix">
            <div className="slider-item-cont slider-item-img">
               <img src={this.props.src}/>
            </div>
            <div className="slider-item-cont slider-item-txt">
               <h2>{this.props.title}</h2>
               <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is
                  made of organic cotton and comes in a regular fit. </p>
               {
                  this.state.bought
                     ? <button className="add-btn btn btn-cart-added" onClick={this.removeItem} price={this.props.price} name={this.props.name}>remove</button>
                     : <button className="add-btn btn btn-cart-empty" onClick={this.addItem} price={this.props.price} name={this.props.name}>add to cart</button>
               }
            </div>
         </div>
      );
   }
}

function Banner(props) {
   return (
      <div className="slider-wrap section" id="sliderBlock">
         <div className="container">
            <div className="slider">
               {productList.map((item, index)=> {
                  if (item.name !== "wallet" && item.name !== "coat") {
                     return <SliderItem key={item.articul + index * 2}
                                        src={item.src}
                                        price={item.price}
                                        name={item.name}
                                        articul={item.articul}
                                        vendor={item.articul}
                                        title={item.title}/>
                  }
               })}
            </div>
         </div>
      </div>
   );
}

export default Banner;