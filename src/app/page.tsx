import Image from "@/components/Image";
import { formatDistanceToNow } from "date-fns";
import images, { ImageType } from "@/data/images";
import Link from "next/link";

export default function FeedPage(): JSX.Element {
  return (
    <div>
      {images.map((image: ImageType) => (
        <div className="post" key={image.id} style={{width: "50vw"}}>
          <div className="author">{image.username}</div>
          <>
            <Link href={`/post/${image.id}`}>
              <Image src={image.url} alt={image.description} />
            </Link>
          </>
          <div className="timestamp">
            {formatDistanceToNow(image.createdDate)}
          </div>
        </div>
      ))}
    </div>
  );
}
