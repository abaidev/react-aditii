import React from 'react';
import BlockItem from './BlockItem';
import productList from '../db/products';

function getCategoryItemList(category) {
   const itemsSorted = productList.map(function (item, index) {
      if (item.name === category || category === "") {
         return <BlockItem key={item.articul + index * 2}
                           src={item.src}
                           price={item.price}
                           name={item.name}
                           title={item.title}
                           vendor={item.articul}/>
      }else if (category == "sale" && item.sale === true){
         return <BlockItem key={item.articul + index * 2}
                           src={item.src}
                           price={item.price}
                           name={item.name}
                           title={item.title}
                           vendor={item.articul}/>
      }
   });
   return itemsSorted;
}

class BlockElement extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         userLogged: false
      }
   }

   render(props){
      return(
         <div className={this.props.cls + " section"} id={this.props.id}>
            <h2 className="container block-title">{this.props.sectionTitle}</h2>
            <div className="featured-content">
               <div className="container">
                  <ul className="featured-list row-slider">
                     {getCategoryItemList(this.props.category)}
                  </ul>
               </div>
            </div>
         </div>
      )
   }
}
export default BlockElement;