import axios from 'axios'
import React, {Component, Fragment} from 'react'
import "./BlogPostDetail.css"

class BlogPostDetail extends Component {
    state = {
        postAPI: "http://localhost:3001/posts",
        detailPost: {
            title:'', 
            body:''
        }
    }
    componentDidMount() {
        let id = this.props.match.params.blogId
        axios.get(this.state.postAPI + `/${id}`)
        .then(res => {
            console.log(res)
            let post = res.data
            this.setState({
                detailPost: {
                    title: post.title,
                    body: post.body
                }
            })
        })
        .catch(e => console.error(e))
    }
    
    render() {
        return(
            <Fragment>
                <p className='breadcumb-detail-blog'>Detail Blog Page</p>
                <div className='post-detail-container'>
                    <h1>{this.state.detailPost.title}</h1>
                    <p>{this.state.detailPost.body}</p>
                </div>
            </Fragment>
        )
    }
}

export default BlogPostDetail
