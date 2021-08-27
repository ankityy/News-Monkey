import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false,
            page:1
        }
    }
    
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ed48ec967f3a4fad82d2481766ad1d5e&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handleNext =async () => {

        if (this.state.page+1 <= Math.ceil(this.state.totalResults / 20)) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ed48ec967f3a4fad82d2481766ad1d5e&page=${this.state.page+1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
            page: this.state.page + 1 ,
            articles: parsedData.articles
         })    
        }
        
    }

    handlePrev = async () => {
       
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ed48ec967f3a4fad82d2481766ad1d5e&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }


    render() {
        return (
            <div className="container my-3">
                <h3>Top headlines</h3>
              
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}
                            imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                   
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark btn-sm" onClick={this.handlePrev}>&larr; Previous</button>
                    <p style={{color: "blue"}}>Page - {this.state.page} </p>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults / 20) } className="btn btn-dark btn-sm" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
