import React, { Component } from 'react'

export default class News extends Component {


  render() {

    let {newsTitle, newsDescription, newsImage, newsUrl, publishedAt, author} = this.props;

    return (
        <div className="card">
<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {author}
    <span class="visually-hidden">unread messages</span>
  </span>
        <img width={'100%'} className="card-img-top px-0" src={newsImage} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{newsTitle}
</h5>
          <p className="card-text">{newsDescription}</p>
          <p><small className="text-body-secondary">Uploaded at {publishedAt}</small></p>
          <a href={newsUrl} target='_' className="btn btn-primary">Read Full News</a>
        </div>
      </div>
    )
  }
}
