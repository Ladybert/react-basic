/*eslint-disable*/
import React, {Component, createContext, Fragment} from 'react'
import "./Home.css"
import Thumbnail from '../../component/Youtube/Thumbnail'
import Navbar from '../../component/Youtube/Navbar'
import videoData from '../../data/data'
import Product from '../pages/Product/Product'
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp'
import BlogPost from '../pages/BlogPost/BlogPost'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import YoutubeComponent from '../pages/YoutubeComponent/YoutubeComponent'
import BlogPostDetail from '../pages/BlogPost/BlogPostDetail/BlogPostDetail'
import GlobalProvider from '../../context/context'

class Home extends Component {
  render() {
    return(
      <BrowserRouter>
          <Fragment>
            <Navbar />
            <Route path='/' exact component={YoutubeComponent}/>
            <Route path='/blog-post' component={BlogPost}/>
            <Route path='/blog-post-detail/:blogId' component={BlogPostDetail}/>
            <Route path='/product' component={Product}/>
            <Route path='/lifecycle' component={LifeCycleComp}/>
          </Fragment>
      </BrowserRouter>
    )
  }
}

export default GlobalProvider(Home)
