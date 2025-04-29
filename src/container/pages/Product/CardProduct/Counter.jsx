import React, { Component } from 'react';

class Counter extends Component {
    state = {
        order: 1
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handleButtonPlus = () => {
       this.setState({
            order:this.state.order + 1
           }, () => {
               this.handleCounterChange(this.state.order)
           })
    }

    handleButtonMinus = () => {
        let value = this.state.order

        if(value <= 1) {
         return this.setState({
             order:1
            })
        } else {
         return this.setState({
             order:this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }
    render() {
        return (
            <div className="counter">
                <button className="minus" onClick={this.handleButtonMinus}>-</button>
                <input type="text" value={this.state.order} />
                <button className="plus" onClick={this.handleButtonPlus}>+</button>
            </div>
        )
    }
}

export default Counter;
