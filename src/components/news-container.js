import React, { Component, Fragment } from 'react'
import NewsItem from './news-item'
import Loading from './loading';


export default class  NewsContainer extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
        article: [],
        loading: true,
        page: 1,
        totalResults: 0,
      }
    }
    

       updateData = async() =>
    {
      this.setState({loading: true});

      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.state.pageSize}&category=${this.props.category}`;
      this.setState({loading: true});

      const response = await fetch(url);
      const news = await response.json();
      this.setState({article: this.state.article.concat(news.articles)});
      this.setState({totalArticles: news.totalResults}); 
      this.setState({loading: false});
    }
   async componentDidMount()
   {
    this.updateData();
   }
   
    generateNextNews = ()=>
    {
      this.setState({page: this.state.page+1})
      this.updateData(this.state.page+1)
    }

    generatePreviousNews= ()=>
    {
    this.setState({page: this.state.page-1})
     this.updateData(this.state.page-1);
    }





    render()
    {
      return <div className='container '>
    <div className='row'>
     {this.state.loading &&  
     <div className='text-center'>
      <Loading/>
      </div>
     }


      <div className='container'>
        <div className='row'>
        {!this.state.loading && this.state.article.map((article, idx)=>{
      return(
           <Fragment>
              { <div key={idx} className='col-md-3 mx-4 my-4'>
<NewsItem key={article.title} newsTitle = {article.title} newsDescription ={article.description} newsImage = {article.urlToImage} newsUrl={article.url} publishedAt={article.publishedAt} author={article.source.name}/>
     </div>}
   
           </Fragment>
      )
    })}
        </div>
      </div>
    </div>
    <div className='container d-flex justify-content-between mb-3'>
     <button disabled={this.state.page <=1 } onClick={this.generatePreviousNews}  type="button" className="btn btn-primary">Previous</button>
     <button disabled={this.state.totalArticles < this.state.page*12} onClick={this.generateNextNews} type="button" className="btn btn-primary">Next</button>
     </div>
     
    </div>
    }

}
