import React from "react";
import {cartRender} from './Cart';
import productList from '../db/products';

const cartList = [];

function getItemViaArticul(itemVendor) {
   for(let item of productList){
      if (item.articul === itemVendor){
         cartList.push(item);
      }
   }
   return cartRender();
}

function removeFromCartlist(itemVendor) {
   for (let [index, item] of cartList.entries()) {
      if (item.articul === itemVendor) {
         cartList.splice(index, 1);
      }
   }
   return cartRender();
}

// BAD CODING
function addToCart(event, itemVendor) {
   // event.preventDefault();
   let cart = document.getElementById("cart"),
      target = event.target,
      cartValue = parseInt(cart.innerHTML) || 0,
      itemPrice = parseInt(target.getAttribute('price'));
   if (cartValue < 0) {
      console.log('КАКАЯ ТО ПРОБЛЕМА. СУММА МЕНЬШЕ НОЛЯ.')
   }
   cartValue += itemPrice;
   cart.innerHTML = cartValue;
   getItemViaArticul(itemVendor);
}

function removeFromCart(event, itemVendor) {
   let cart = document.getElementById("cart"),
      cartValue = parseInt(cart.innerHTML) || 0,
      itemPrice = parseInt(event.target.getAttribute('price'));
   if (cartValue <= 0) {
      console.log('НЕ ПОЛУЧАЕТСЯ. СУММА НОЛЬ ИЛИ МЕНЬШЕ.')
   } else if (cartValue >= itemPrice) {
      cartValue -= itemPrice;
      cart.innerHTML = cartValue;
   }else{
      console.log(`ОШИБКА УДАЛЕНИЯ: ${cartValue} \n ${itemPrice}`);
   }
   removeFromCartlist(itemVendor);
}

export {addToCart, removeFromCart, getItemViaArticul, removeFromCartlist, cartList};
