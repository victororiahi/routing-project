import React from 'react'
import {useEffect} from 'react'
import axios from '../api/http'
import {useState} from 'react'
import '../css/Article.css'
import { createDefaultImportMeta } from 'vite/module-runner'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Articles() {
    const navigate = useNavigate(); 
    const[articles, setArticles] = useState([]);
    useEffect(() => {
         axios.get('/api/Articles')
    .then((response) => {setArticles(response.data.data)})
    .catch(error => console.error('Error fetching articles:', error));
    },[]);
   
  return (
  <div className="articles-container">
    <h1 className="articles-title">Articles</h1>
    <div className="articles-grid">
        {articles.length && articles.map((article) => {
        
        const truncateText = (text, maxLength)=>{
         if(text.length > maxLength){
            return text.substring(0, maxLength) + '...';
         }
        };
        const summary = article.articleTextSummary || truncateText(article.articleText, 100);
            return (
                <Link className="no-underline" to={"/articles/" + article.id} key={article.id}>
            < div className='article-card' key={article.id}>
                <div className="article-header">
                   <div className="article-author-avatar" >
                    <img src={article.articleAuthorImage || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHSLV3XiY_tKkB1BJ7GA7pqVm8ZFSTWzRtGs2BiiU3mARaM1BZMRTbLbXwS-hoH2KKd5Oonq7xW0vXjH8zBdOFWTNJ0r3KaVF1prkd6uSLFFMneOUIyObNqV_6OdqhQSafnwr722HBf5vjJc4NOER34YEhHxYKfu3KvbWthz4tqsrhBpQH7198aVZ65hJn_dKS2gG3nPr3SPh6DMo696CLBT00KEnnBfRStJ2oE0bGF0cEZnKgVv-5glQhlDnXFYmcKd-3czY5EdM' } alt="author image" />
                   </div>
                    <div className="article-info">
                        <p className="author-name">
                            {article.articleAuthor || "Unknown Author"}
                        </p>
                        
                        <span  className="article-date-time">
                           {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(article.articleDateTime))}
                        </span> 
                        &nbsp; &nbsp;
                        <span  className="article-date-time">
                           {new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(new Date(article.articleDateTime))}
                        </span>
                        
                    </div>
             </div>

                    <div className='image-wrapper'>
                     <img src={article.articleImage} alt={article.articleTitle || "article image"} />
                    </div>
                    <div className="article-info">
                              <h3>{article.articleTitle || "Untitled"}</h3>
                             <p>{summary} </p>
                             <span onClick={() => {navigate('/articles/'+article.id)}} style={{fontWeight:'bold', color:'green'}} >Read More...</span>
                     </div>
            
            </div>
            </Link>
            )
        })}
    </div>

  </div>
    )
}


export default Articles