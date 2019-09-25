import React from 'react';
import Photo from './Photo';

const PhotoList = (props) => {   
  // console.log(props.match.params.search)
  const images = props.data.map( photo => {
    return (<Photo 
            key={photo.id} 
            url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
            alt={photo.title}  
            />)
    
  })  

  return ( 
      <div className="photo-container">
        {/* Name of the item that was searched */}
        <h2> {props.match.params.search} </h2>
          <ul>
            {images}
          </ul>
    </div>
  );
}
 
export default PhotoList;