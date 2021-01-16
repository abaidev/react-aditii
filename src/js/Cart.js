import React from "react";
import ReactDOM from "react-dom";
import {cartList} from "../js/supFunctions";

class ProductItem extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         inputVal: 1,
         itemTotalPrice:0
      };
      this.handleIncrement = this.handleIncrement.bind(this);
      this.handleDecrement = this.handleDecrement.bind(this);
      this.handleValueChange = this.handleValueChange.bind(this);
   }

   componentDidMount(){
      this.setState((state)=>({itemTotalPrice: (state.inputVal) * this.props.productPrice}));
      this.props.priceOnMount(this.state.inputVal * this.props.productPrice);
      this.props.amountOnMount(this.state.inputVal)
   }
   componentWillUnmount() {
      // this.setState((state)=>({itemTotalPrice: 0}));
      this.props.priceOnMount(this.state.inputVal * this.props.productPrice, 0);
      this.props.amountOnMount(this.state.inputVal, 0);
   }

   handleIncrement(e){
      this.setState((state)=>({
         inputVal: state.inputVal + 1,
         itemTotalPrice: (state.inputVal+1) * this.props.productPrice
      }));
      this.props.onIncrease(this.props.productPrice);
      e.preventDefault();
   }

   handleDecrement(e){
      if (this.state.inputVal <= 0) {
         return;
      }
      this.setState((state)=>({
         inputVal: state.inputVal - 1,
         itemTotalPrice: (state.inputVal-1) * this.props.productPrice
      }));
      this.props.onDecrese(this.props.productPrice);
      e.preventDefault()
   }

   handleValueChange(event){
      console.log(event);
      let target = event.target;
      this.setState({
         inputVal: target.value,
         itemTotalPrice: target.value * this.props.productPrice
      });
   }

   render(){
      return(
         <div className="cart-row d-flex flex-row flex-wrap justify-content-around align-items-stretch align-content-center">
            <div className="cart-row-item img-wrap"><img src={this.props.src} alt={this.props.alt}/></div>
            <div className="cart-row-item cart-row-itemName">{this.props.productName}</div>
            <div className="cart-row-item cart-row-itemPrice">{this.props.productPrice} USD</div>
            <div className="cart-row-item cart-row-itemPrice">
               <div className="counter">
                  <button className="btn minus cart-btn" onClick={this.handleDecrement}>-</button>
                  <input type="text" value={parseInt(this.state.inputVal) || 0} onChange={this.handleValueChange}/>
                  <button className="btn plus cart-btn" onClick={this.handleIncrement}>+</button>
               </div>
            </div>
            {/*<div className="cart-row-item cart-row-itemSumm">{this.props.productPrice * this.state.inputVal} сом</div>*/}
            <div className="cart-row-item cart-row-itemSumm">{this.state.itemTotalPrice} USD</div>

         </div>
      )
   }
}

class Cart extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         totalPrice: 0,
         totalAmount: 0,
      };
      this.handleTotalIncrement = this.handleTotalIncrement.bind(this);
      this.handleTotalDecrement = this.handleTotalDecrement.bind(this);
      this.getPriceOnItemMount = this.getPriceOnItemMount.bind(this);
      this.getAmountOnItemMount = this.getAmountOnItemMount.bind(this);
   }
   handleTotalIncrement(price){
      this.setState((state)=>({
         totalAmount: state.totalAmount + 1,
         totalPrice: state.totalPrice + parseInt(price)
      }));
   }
   handleTotalDecrement(price){
      this.setState({
         totalAmount: this.state.totalAmount - 1,
         totalPrice: this.state.totalPrice - parseInt(price)
      });
   }
   getAmountOnItemMount(amount, zero){
      if (zero === 0){
         this.setState((state) => ({
            totalAmount: state.totalAmount - amount
         }));
         return;
      }
      this.setState((state) => ({
         totalAmount: state.totalAmount + amount
      }));
   }
   getPriceOnItemMount(price, zero){
      if (zero === 0){
         this.setState((state) => ({
            totalPrice: state.totalPrice - price
         }));
         return;
      }
      this.setState((state) => ({
         totalPrice: state.totalPrice + price
      }));
   }

   render(){
      let cartProductList = cartList.map((item, index) => <ProductItem key={item.articul + index * 2}
                                                                       src={item.src}
                                                                       productName={item.title}
                                                                       productPrice={item.price}
                                                                       onIncrease={this.handleTotalIncrement}
                                                                       onDecrese={this.handleTotalDecrement}
                                                                       priceOnMount={this.getPriceOnItemMount}
                                                                       amountOnMount={this.getAmountOnItemMount}

                                          />);
      return(
         <div className="cart-wrap">
            <a id="modalClose">&nbsp;</a>
            <div className="cart-row cart-row-headers">
               <div className="cart-row-item cart-row-title">Изображение товара</div>
               <div className="cart-row-item cart-row-title">Название товара</div>
               <div className="cart-row-item cart-row-title">Цена товара</div>
               <div className="cart-row-item cart-row-title">Количество товара</div>
               <div className="cart-row-item cart-row-title">Общая цена товара</div>
            </div>
            <div className="cart-wrap-in">
               {cartProductList}
               <div className="cart-total">
                  Общее количество товара: <span>{this.state.totalAmount}</span> шт.
                  на сумму <span id="cart-final-price">{this.state.totalPrice.toLocaleString()}</span> USD
               </div>
            </div>
         </div>
      )
   }
}

function cartRender(){
   ReactDOM.render(<Cart/>, document.getElementById('cartModal'));
}

export {cartRender};