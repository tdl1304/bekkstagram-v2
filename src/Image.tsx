interface ImageProps {
    src: string;
    alt: string;
}




function Image(props: ImageProps): JSX.Element {
    return <img src={props.src} alt={props.alt} className="image" />
  }

export default Image;