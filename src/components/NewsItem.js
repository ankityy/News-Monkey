import React, { Component } from 'react'

export class NewsItem extends Component {
    
    convertToDate = () => {
        let d = new Date(this.props.date);
        return d.toGMTString();
    }
  

    render() {
        let { title, description,imageUrl, newsUrl, author, source} = this.props;
        return (
            <div>
              <div className="card my-3">
                 <img src={imageUrl?imageUrl:"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} style={{height: '30vh'}} className="card-img-top" alt="..."/>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"50%", zIndex:"1"}}>{source}</span>

                    <div className="card-body">
                        <h5 className="card-title">{ title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"}: {this.convertToDate() }</small>"</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-outline-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
