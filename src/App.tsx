import React from 'react';
import images from './data/images';
import { formatDistanceToNow } from 'date-fns';
import Header from './Header';
import Image from './Image';

function App() {
  console.log(images)
  return (
    <div>
      <Header />
      <div>
        {images.map((image) => (
          <div className='post'>
            <div className='author'>{image.username}</div>
              <Image key={image.id} src={image.url} alt={image.description} />
            <div className='timestamp'>{formatDistanceToNow(image.createdDate)}</div>
          </div>
        ))}
      </div>
    </div >
  );
}


export default App;
