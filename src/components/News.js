import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false,
            page:1
        }
    }

    capitalize = () => {
        const str = this.props.category;
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed48ec967f3a4fad82d2481766ad1d5e&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            loading: false,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handleNext =async () => {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed48ec967f3a4fad82d2481766ad1d5e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
            page: this.state.page + 1 ,
                articles: parsedData.articles,
            loading: false
         })    
        
    }

    handlePrev = async () => {
       
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed48ec967f3a4fad82d2481766ad1d5e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }


    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center mb-3">{this.capitalize()} - Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                                imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                   
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark btn-sm" onClick={this.handlePrev}>&larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize) } className="btn btn-dark btn-sm" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
