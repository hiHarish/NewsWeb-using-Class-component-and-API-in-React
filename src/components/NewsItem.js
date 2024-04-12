import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, mydesc, imgurl, newsurl}=this.props;
    return (
      <><div className="card"  style={{width: 18+"rem"}}>
  <img src={imgurl} className="card-img-top" alt="Image" />
  
  <div className="card-body">
    <button type="button" className="btn btn-link-dark">
      <a href={newsurl} target='_blank' rel="noreferrer">
        <h5>{title}</h5>
      </a>
    </button>
    <p className="card-text">{mydesc}</p>
    
    </div>
    </div>
      </>
        
    )
  }
}
