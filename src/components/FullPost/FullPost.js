import React, { Component } from 'react'

import './FullPost.css'

class FullPost extends Component {
  render() {
    const { title, content } = this.props

    let post = <p>Please select a Post!</p>
    post = (
      <div className="FullPost">
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="Edit">
          <button className="Delete">Delete</button>
        </div>
      </div>
    )
    return post
  }
}

export default FullPost
