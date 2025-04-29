import React, {Component} from 'react'
import Counter from './Counter'

class CardProduct extends Component {
  render() {
    return(
        <div className='card'>
        <div className="img-thumb-product">
            <img src="/assets/beef.webp" draggable={'false'} alt="beef-product" />
        </div>
        <p className="product-title">Daging Sapi Premium | Fresh langsung impor dari Jepun</p>
        <p className="product-price">Rp 978.000</p>
        <Counter onCounterChange={(value)=> this.props.onCounterChange(value)}/>
    </div>
    )
  }
}

export default CardProduct
