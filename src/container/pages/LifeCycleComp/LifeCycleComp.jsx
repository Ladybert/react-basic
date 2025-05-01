import React, { Component, Fragment } from 'react'
import "./LifeCycleComp.css"
import { GlobalConsumer } from '../../../context/context'

class LifeCycleComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }

        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("✅ componentDidMount dipanggil");
        // this.interval = setInterval(() => {
        //     this.setState({ count: 2 });
        //   }, 5000);
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.group("shouldComponentUpdate");
        // console.log("nextProps : ", nextProps)
        console.log("nextState : ", nextState)
        console.log("this state : ", this.state)
        console.groupEnd()
        if(nextState.count >= 4) {
            return false
        }
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate dipanggil");
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate dipanggil");
    }

    // eslint-disable-next-line react/no-typos
    componentwillUnmount() {
        console.log("🧹 componentWillUnmount dipanggil");
    }

    // handleShowComponent = (newValue) => {
    //     this.props.onCountChangeShowComponent(newValue)
    // }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        // }, () => {
        //     this.handleShowComponent(this.state.count)
        })
    }
  render() {
      return (
        <Fragment>
        <button className='lifecycle-btn' onClick={this.changeCount}>Component Button {this.state.count}</button>
          <hr />

          <p>Total Order: {this.props.state.totalOrder}</p>
      </Fragment>
    )
  }
}

export default GlobalConsumer(LifeCycleComp)
