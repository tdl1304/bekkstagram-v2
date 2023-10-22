import React from 'react';
import images from './data/images.js';
import { formatDistanceToNow } from 'date-fns';

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

function Header() {
  return (
    <div>
      <h1>Bekkstagram</h1>
    </div>
  );
}

function Image(props) {
  return <img src={props.src} alt={props.alt} author={props.username} timestamp={props.createdDate} className="image" />
}

function Post() {
  return (
    <div className='post'>
      <div className='author'></div>

      <div className='timestamp'>formatDistanceToNow()</div>
    </div>
  )
}

export default App;
