type ImageProps = {
    src: string;
    alt: string;
}

function Image({src, alt}: ImageProps): JSX.Element {
    return <img src={src} alt={alt} className="image" />
  }

export default Image;