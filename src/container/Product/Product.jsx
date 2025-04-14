import React, { Component, Fragment } from 'react'
import "./Product.css"
import CardProduct from '../CardProduct/CardProduct'

class Product extends Component {
    state= {
        order: 1
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

  render(){
    return(
        <Fragment>
            <header className='header-online-shop'>
                <div className="logo">
                    <img src="/assets/gopud.png" alt="logo gopud" width={'150px'} />
                </div>
                <div className="troley">
                    <img src="/assets/cart.png" alt="cart"/>
                    <div className="count">{this.state.order}</div>
                </div>
            </header>
           <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>
        </Fragment>
    )
  }
  
}

export default Product
