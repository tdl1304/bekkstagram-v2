import images from "./data/images";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="posts">
        {images.map((image) => (
        <Image id={image.id} src={image.url} alt={image.description}/>
        ))}
      </div>
    </div>);
}


function Header() {
  return (
    <header>
      <h1>Bekkstagram</h1>
    </header>
  )
}

function Image(props:any) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="image"
    />
  )
}



export default App;
