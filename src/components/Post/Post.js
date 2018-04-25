import React from 'react'

import './Post.css'

const post = ({ author, title, onClick }) => (
  <article className="Post" onClick={onClick}>
    <h1>{title}</h1>
    <div className="Info">
      <div className="Author">{author}</div>
    </div>
  </article>
)

export default post
