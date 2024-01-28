
import images, { ImageType } from '@/data/images';
import Image from '@/components/Image';

type DetailPageParams = {
    id: string;
};

export default function DetailPage({ params }: {params: DetailPageParams}): JSX.Element {
    const { id } = params;

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
                <p>Image not found</p>
            )}
        </div>
    );
}
