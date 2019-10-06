import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      product: [],
      type: ''
    }
    
  this.getProducts = this.getProducts.bind(this);
  }

  getProducts(){
    axios.get('/api/products')
    .then((results) => {
      this.setState({
        products: results.data,
        product: results.data[0],
        type: 'open'
      })
      console.log('Successful getProducts request', this.state.products)
    })
    .catch((err) => console.log(`Unsuccessful getProducts request, ${err}`))
  }

  componentDidMount(){
    this.getProducts();
  }

  render(){
  
    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          
          {this.state.type === 'open' &&
          <div className="col-md-7 product-viewer-container">
            <ProductViewer product={this.state.product}/>
          </div>
          }

          <div className="col-md-5 product-list-container">
            <ProductList  products={this.state.products}/>
          </div>
        </div>
      </div>
    )
  }
}