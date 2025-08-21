import React from 'react'
import { useParams } from 'react-router-dom'
import Article from '../components/Article'


const ArticlePage = () => {
    const { id } = useParams();
   console.log(id); // This will log the article ID from the URL
  return (

<>
  <Article articleId={id}/>
  
 </>

)
}

export default ArticlePage