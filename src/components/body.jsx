import React, { useEffect, useState } from 'react'
import './style.css'

function Body(props) {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        async function getNews(){
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=50b864b49516482cb42fed1194d1578a");
  const news = await response.json();
  setArticles(news.articles);
        }
        getNews();
    },[])
  return (
    <div id='news-today-body'>
        <div className='news-today-articles'>
            {articles.map((article, index)=>{
               return <div key={index} className='news-today-article-content'>
                   <img src={article.urlToImage}/>
                   <div className='news-today-content-area'>
                        <h2 className='news-today-news-heading'>{article.title}</h2>
                        <p className='news-today-news-description'>{article.description}</p>
                        <span className='news-today-news-source'>{article.source.name}</span>
                        <span className='news-today-news-date'>{article.publishedAt}</span>
                    </div>
                    </div>
            })}
        </div>
    </div>
  )
}

export default Body