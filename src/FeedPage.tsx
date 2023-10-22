import Image from './Image';
import { formatDistanceToNow } from 'date-fns';
import images, { ImageType } from './data/images';
import { Link } from 'react-router-dom';

export default function FeedPage(): JSX.Element {
    return (<>
        {images.map((image: ImageType) => (
          <div className='post' key={image.id}>
            <div className='author'>{image.username}</div>
              <Link to={`/post/${image.id}`}>
                <Image src={image.url} alt={image.description} />
              </Link>
            <div className='timestamp'>{formatDistanceToNow(image.createdDate)}</div>
          </div>
        ))}
    </>)
}