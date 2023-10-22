import { useParams } from 'react-router-dom';
import images, { ImageType } from './data/images';
import Image from './Image';

export function DetailPage(): JSX.Element {
    const { id } = useParams();

    // Find the image with the matching parsedId
    const image = images.find((img: ImageType) => parseInt(img.id) === Number(id));

    return (
        <div>
            {image ? ( // Check if image is found
                <>
                    <h1>{image.description}</h1>
                    <Image src={image.url} alt={image.description} />
                    <p>Author: {image.username}</p>
                </>
            ) : (
                <div>Image not found</div>
            )}
        </div>
    );
}
