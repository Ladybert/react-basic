/*eslint-disable */
import React, { Component, Fragment } from 'react';
import "./BlogPost.css"
import Post from '../../component/Post/Post';
import axios from 'axios';
import { nanoid } from 'nanoid';

class BlogPost extends Component {
    
    state = {
        postUrl: [],
        postAPI: "http://localhost:3001/posts",   //use this code for add another method except get <console.log(this.state.postAPI + `/${data}`)>
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get(this.state.postAPI + "?_sort=id&_order=desc")
        .then((rsp) => {
            console.log(rsp.data)
            this.setState({
                postUrl: rsp.data,
                isApiOnline: true
            })
        })
        .catch(() => {
            this.setState({ 
                postUrl: [],
                isApiOnline: false 
            });
          });    
    }

    handleRemove = (data) => {
        if(window.confirm(`Are you sure want to delete content with id ${data} ?`)) {
            setTimeout(() => {
                alert(`The Content with id ${data} was deleted`)
                axios.delete(this.state.postAPI + `/${data}`)
                .then(() => {
                    setTimeout(() => {
                        this.getPostAPI()
                    }, 300)
                })
                .catch((err) => {
                    alert('Failed to delete data');
                    console.error(err);
                  });
            }, 500)
        }
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }
    
    componentDidMount() {
        if(!this.getPostAPI()){
            return <p style={{ color: 'red' }}>⚠️ Server API tidak aktif. Silakan cek koneksi atau nyalakan server.</p>
        }

    }

    postDataToAPI = () => {
        axios.post(this.state.postAPI, this.state.formBlogPost)
        .then((res) => {
            console.log(res)
            this.getPostAPI()
        }, (err) => {console.log(err)})
    }

    putDataToAPI = () => {
        axios.put(this.state.postAPI + `/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        .then((res) => {
            console.log(res)
            setTimeout(() => {
                this.setState({
                    formBlogPost: {
                      ...this.state.formBlogPost,
                      title: '',
                      body: ''
                    },
                    isUpdate: false
                  });
                alert("content has been updated")
            }, 300)
            this.getPostAPI()
        }, (err) => {
            console.log(err)
            alert("failed to save update content :", err)
        })
    }

    handleFormOnChange = (ev) => {
        let postId = "post-" + nanoid()
        let userId = "user-" + nanoid()
        let formBlogPostNew = {...this.state.formBlogPost}
        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = postId
        }
        formBlogPostNew['userId'] = userId
        formBlogPostNew[ev.target.name] = ev.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log("new value obj formBlogPost :", this.state.formBlogPost)
        })
    }

    handleValueValidate = () => {
        const { title, body } = this.state.formBlogPost;
    
        if (title.trim() === '' || body.trim() === '') {
            alert("You're not filling something yet!");
            return;
        }
    
        this.handleSubmitButton();
    }

    handleSubmitButton = () => {
        if(this.state.isUpdate) {
            if(window.confirm("Simpan perubahan isi konten ?")){
                return setTimeout(() => {
                    this.putDataToAPI()
                    }, 500)
            }  
        } else {
            if(window.confirm("Unggah konten ini ?")){
                setTimeout(() => {
                    this.postDataToAPI()
                    this.setState({
                        formBlogPost: {
                          ...this.state.formBlogPost,
                          title: '',
                          body: ''
                        }
                      });
                    return alert("Content telah terunggah")
                }, 500)
            }  
        }
    }

    render() {
        return(
            <Fragment>
                <p className='section-title'>Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" value={this.state.formBlogPost.title} onChange={this.handleFormOnChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" value={this.state.formBlogPost.body} onChange={this.handleFormOnChange} cols={30} rows={10} placeholder='add new text'></textarea>
                    <button className='btn-submit' onClick={this.handleValueValidate}>Simpan</button>
                </div>
                {
                    this.state.isApiOnline ?
                    (this.state.postUrl.map(index => {
                        return <Post
                        key={index.id}
                        data={index}
                        remove={this.handleRemove}
                        update={this.handleUpdate} />
                    }))
                    :
                    (
                        this.componentDidMount()
                        // setTimeout(() => {
                        // }, 500)
                        
                    )

                }
            </Fragment>
        )
    }
}

export default BlogPost;
