import React, { Component } from 'react'
import axios from 'axios'

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'

class Blog extends Component {
  state = {
    posts: [],
    selectedID: null,
    error: false,
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data.slice(0, 4)
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Gary',
          }
        })
        this.setState({ posts: updatedPosts })
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  postSelectHandler = id => {
    this.setState({ selectedID: id })
  }

  render() {
    const posts = this.state.error ? (
      <p style={{ textAlign: 'center' }}>Something went wrong!</p>
    ) : (
      this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            author={post.author}
            title={post.title}
            onClick={() => this.postSelectHandler(post.id)}
          />
        )
      })
    )

    // const posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>

    // if (!this.state.error) {
    //   const posts = this.state.posts.map(post => {
    //     return (
    //       <Post
    //         key={post.id}
    //         author={post.author}
    //         title={post.title}
    //         onClick={() => this.postSelectHandler(post.id)}
    //       />
    //     )
    //   })
    // }

    const selectedPost = this.state.posts.find(obj => {
      return obj.id === this.state.selectedID
    })

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost
            id={this.state.selectedID}
            title={selectedPost ? selectedPost.title : ''}
            content={selectedPost ? selectedPost.body : ''}
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
}

export default Blog
