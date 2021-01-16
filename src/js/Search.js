import React from "react";
import ReactDOM from "react-dom";
import data from '../db/products_db';

function ShowItems(props) {
   const mass = props.items;

   function getElemFromHref(attribute){
      let element = document.getElementById(attribute);
      let coordElementTop = element.getBoundingClientRect().top + window.pageYOffset;
      return coordElementTop;
   }
   function scrollToBlock(event) {
      let header = document.getElementById('header-block');
      let headerHeight = header.offsetHeight;
      let target = event.target;
      let nameOfElement = target.getAttribute('href').slice(1);
      let newCoordinates = getElemFromHref(nameOfElement)-headerHeight;

      window.scrollTo({left:0, top:newCoordinates, behavior:"smooth"});
      event.preventDefault();
   }

   return(
      <div className="search-results active-res">
         {mass.map((item, index) =>
            <a className="search-res-item nav-link" key={index*3-1+2} onClick={scrollToBlock} href={"#"+item.name+"-block"}>
               {item.title} - $ {item.price}
            </a>
         )}

      </div>
   );
}
function getItems(tovar) {
   // function should have 'async' prefix
   // await fetch('some api url to get info')
   //    .then((response) => response.json())
   //    .then((data)=> {
         let product = tovar.toLowerCase();
         // console.log(product);
         let foundItems = [];
         for (let item of data){
            console.log(`ITEM: ${item.title.indexOf(product)}`);
            if (item.name === product || item.price === product
                || item.articul === product || item.color === product
                || item.title.toLowerCase() === product || item.title.indexOf(product) > -1
                || item.name.indexOf(product) > -1){
               foundItems.push(item);
            }
         }
         return ReactDOM.render(<ShowItems items={foundItems}/>, document.getElementById('search-res-wrap'));
      // });
}

class Search extends React.Component{
   constructor(props){
      super(props);
      this.handleInput = this.handleInput.bind(this);
   }

   handleInput(e){
      let searchTxt = e.target.value;
      getItems(searchTxt);
   }

   render(){
      return(
         <div className="nav-elem form-wrap">
            <form>
               <input className="form-control" type="search"
                      placeholder="Type shoes, shirt or Nike etc..." aria-label="Search"
                      onChange={this.handleInput}/>
            </form>
            <div id="search-res-wrap"></div>
         </div>
      );
   }
}

export default Search;