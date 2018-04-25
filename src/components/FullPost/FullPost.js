import React, { Component } from 'react'
import axios from 'axios'

import './FullPost.css'

class FullPost extends Component {
  deletePostHandler = id => {
    axios
      .delete('/posts/' + id)
      .then(response => {
        console.log(response)
      })
  }

  render() {
    const { id, title, content } = this.props

    let post = <p>Please select a Post!</p>
    post = (
      <div className="FullPost">
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="Edit">
          <button className="Delete" onClick={() => this.deletePostHandler(id)}>
            Delete
          </button>
        </div>
      </div>
    )
    return post
  }
}

export default FullPost
