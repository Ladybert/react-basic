/*eslint-disable*/
import React, {Component} from 'react'
import "./Home.css"
import Thumbnail from '../../component/Youtube/Thumbnail'
import Navbar from '../../component/Youtube/Navbar'
import videoData from '../../data/data'
import Product from '../Product/Product'
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'
import BlogPost from '../BlogPost/BlogPost'

class Home extends Component {
  state = {
    showComponent: true,
    count: 1
  }

  // handleCountShowComponent = (newValue) => {
  //   this.setState({
  //     count: newValue
  //   })
  //   let val = this.state.count
  //   console.log(val)
    
  //   if(val > 9) {
  //     return this.setState({
  //       showComponent: false
  //     })
  //   } else {
  //     return this.setState({
  //       showComponent: true
  //     })
  //   }
  // }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false
    //   })
    // }, 15000)
  }
  render() {
    return(
      <div>
        {/* <Navbar />
        <div className='content-container'>
          {videoData.map((video, index) => {
            return(
              <Thumbnail
              key={index}
              thumbnail={video.thumbnail}
              time={video.time}
              title={video.title}
              description={video.description}
              />
            )
          })}
        </div> */}
        {/* <Product /> */}
        {/* <p>LifeCycle Component</p>
        <hr />

        {
          this.state.showComponent 
          ?
          <LifeCycleComp />
          // <LifeCycleComp onCountChangeShowComponent={(value) => {this.handleCountShowComponent(value)}} />
          :
          null
        } */}

        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    )
  }
}

export default Home
