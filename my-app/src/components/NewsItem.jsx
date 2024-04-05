import React from 'react'
import image from '../assets/news.jpeg'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="container ">
      <div >
  <img src={src?src:image} style={{height:"200 px",width:"360 px" }} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className='card-title'>{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className='btn-btn-primary'>Read More</a>
  </div>
</div>
   </div> 
  )
}

export default NewsItem
