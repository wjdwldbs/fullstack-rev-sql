import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   product: this.props.products[0]
    // }
    // this.displayProduct = this.displayProduct.bind(this);
  }

  // displayProduct(e){
  //   console.log(this.state.current_product)
  // }

  render(){
    return(
      <div className = 'product-viewer'>
          <div id={this.props.product.id}>View Product Details:
          <div>PRODUCT: {this.props.product.item}</div>
          <div>MININUM PRICE: {this.props.product.min_cost}</div>
          <div>CURRENT BID PRICE: {this.props.product.curr_bid}</div>
          <div>ENDS IN: {this.props.product.ends_in}</div>
          <img src={this.props.product.img} alt=""/>
        </div>
      </div>
    )
  }
}

// {/* <div style={{float:"left", width:"400px"}} id="products"></div>  */}
// Click the item below to see details: 
// <br/><br/>


// this.setState({
//   clicked: true,
//   current_product: {
//     id: e.target.id.id,
//     item: e.target.id.item,
//     min_cost: e.target.id.min_cost,
//     curr_bid: e.target.id.curr_bid,
//     ends_in: e.target.id.ends_in,
//     img: e.target.id.img
//   }
// })