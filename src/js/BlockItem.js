import React from "react";
import {addToCart, removeFromCart} from '../js/supFunctions';

class BlockItem extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         bought: false
      };
      this.addItem= this.addItem.bind(this);
      this.removeItem= this.removeItem.bind(this);

   }

   addItem(e){
      this.setState({bought: true});
      e.preventDefault();
      addToCart(e, this.props.vendor);
   }
   removeItem(e){
      this.setState({bought: false});
      e.preventDefault();
      removeFromCart(e, this.props.vendor);
   }

   render(){
      return(
         <li>
            <img src={this.props.src} />
            <h3>{this.props.title}</h3>
            <div className="featured-footer">
               $ <span className="featured-price">{this.props.price}</span>
               {
                  this.state.bought
                     ? <button className="add-btn btn btn-cart-added" onClick={this.removeItem} price={this.props.price} name={this.props.name}>remove</button>
                     : <button className="add-btn btn btn-cart-empty" onClick={this.addItem} price={this.props.price} name={this.props.name}>add to cart</button>
               }
            </div>
         </li>
      )
   }
}

export default BlockItem;