import { Link } from "react-router-dom";

function Header():JSX.Element {
    return (
      <div>
        <Link to='/'>
            <h1>Bekkstagram</h1>
        </Link>
      </div>
    );
  }

export default Header;