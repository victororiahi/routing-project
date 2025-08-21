import React, { use } from 'react'
import { useState, useEffect } from 'react'
import axios from '../api/http'
import '../css/Article.css'

const Article = ({articleId}) => {
    const [article, setArticle] = useState({});
    useEffect(() => {
 axios.get('/api/Articles/get-article-item-by-id?id=' + articleId)
    .then((response) => {setArticle(response.data.data); console.log('id: '+articleId); console.log(response.data.data);    })
    .catch(error => console.error('Error fetching articles:', error));
    },[]);
  return (
<>  
<h1 className="article-title">{article.articleTitle}</h1>
< div className='full-article-card'>
                <div className="article-header">
                   <div className="article-author-avatar" >
                    <img src={article.articleAuthorImage || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHSLV3XiY_tKkB1BJ7GA7pqVm8ZFSTWzRtGs2BiiU3mARaM1BZMRTbLbXwS-hoH2KKd5Oonq7xW0vXjH8zBdOFWTNJ0r3KaVF1prkd6uSLFFMneOUIyObNqV_6OdqhQSafnwr722HBf5vjJc4NOER34YEhHxYKfu3KvbWthz4tqsrhBpQH7198aVZ65hJn_dKS2gG3nPr3SPh6DMo696CLBT00KEnnBfRStJ2oE0bGF0cEZnKgVv-5glQhlDnXFYmcKd-3czY5EdM' } alt="author image" />
                   </div>
                    <div className="article-info">
                        <span className="author-name">
                            {article.articleAuthor || "Unknown Author"}
                        </span>
                        &nbsp; - &nbsp;
                        <span className="article-date-time">
                           {article.articleReadLength ? ' '+article.articleReadLength + ' min read' : ''} 
                        </span>
                        *&nbsp; &nbsp;
                        <span className="article-date-time">
                           {/* {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(article.articleDateTime)) || ''} */}
                           {article.articleDateTime ? new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(article.articleDateTime)) : ''}
                        </span> 
                        &nbsp; &nbsp;
                        <span className="article-date-time">
                           {article.articleDateTime ? new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(new Date(article.articleDateTime)) : ''}
                        </span>   
                        
                        {/* <span  className="article-date-time">
                           {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(article.articleDateTime))}
                        </span> 
                        &nbsp; &nbsp;
                        <span  className="article-date-time">
                           {new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(new Date(article.articleDateTime))}
                        </span> */}
                        
                    </div>
             </div>

                    <div className='full-image-wrapper'>
                     <img src={article.articleImage} alt={article.articleTitle || "article image"} />
                    </div>
                    <div className="article-info">
                          
                             <p>{article.articleText} </p>
                             {/* <Link to={'/articles/' + article.id} style={{fontWeight:'bold', color:'green'}} >Read More...</Link> */}
                     </div>
            
            </div>
            </>
  )
}

export default Article