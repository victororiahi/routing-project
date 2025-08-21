import React from 'react'
import {useEffect} from 'react'
import axios from '../api/http'
import {useState} from 'react'
import '../css/Gallery.css'
import { createDefaultImportMeta } from 'vite/module-runner'

export default function Gallery() {
    const [items, setItems] = useState([]);
    useEffect(() => {
axios.get('/api/Gallery')
.then((response) => {setItems(response.data.data)})
.catch(error => console.error('Error fetching gallery items:', error));
    },[]);
  return (
    <div className='gallery-container'>
<h1 className="gallery-title">Photo Gallery</h1>
<div className="gallery-grid">
    {items.map(item => (item.galleryItemImage &&! item.galleryItemImage.includes('youtube.com') &&(
        <div className='gallery-card' key={item.id}>
<div className='image-wrapper'>
    <img src={item.galleryItemImage} alt={item.galleryItemTitle || "gallery item"} />
</div>
<div className="galler-info">
    <h3>{item.galleryItemTitle || "Untitled"}</h3>
    <p>{item.galleryItemDescription || ""}</p>
</div>
    </div>)))}
    </div>
    </div>
  );

};


