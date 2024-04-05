import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const Newsboard = ({category}) => {
    const[articles,setArticles]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e2ad7a5b0322488bb39a26dd0ae446c6`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[category])
  return (
    <div>
      <h2 className='text-center'>Latest<span >News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
