import React, { Component, Fragment } from 'react'
import "./Product.css"
import CardProduct from './CardProduct/CardProduct'
import { GlobalConsumer } from '../../../context/context'

class Product extends Component {
  render(){
    return(
        <Fragment>
        <header className='header-online-shop'>
            <div className="logo">
                <img src="/assets/gopud.png" alt="logo gopud" width={'150px'} />
            </div>
            <div className="troley">
                <img src="/assets/cart.png" alt="cart"/>
                <div className="count">{this.props.state.totalOrder}</div>
            </div>
        </header>
    <CardProduct />
    </Fragment>
    )
  }
  
}

export default GlobalConsumer(Product)
