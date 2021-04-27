import React from 'react'
import ImageCard from './ImageCard.js';
import './ImageList.css';

const ImageList = (props) => {
    console.log(props);

    // const images = props.images.map((image) => {
    //         return <img alt = {image.description} key = {image.id} src = {image.urls.regular}/>
    // });v1

//     const images = props.images.map(({description,id,urls}) => {
//         return <img alt = {description} key = {id} src = {urls.regular}/>
// });v2
    const images = props.images.map((image) => {
        return <ImageCard key = {image.id} image ={image}/>
});

    return <div className = 'Image-List'>{images}</div>
   
}

export default ImageList;