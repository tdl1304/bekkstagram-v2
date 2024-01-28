import Link from "next/link";

function Header():JSX.Element {
    return (
      <div>
        <Link href='/'>
            <h1>Bekkstagram</h1>
        </Link>
      </div>
    );
  }

export default Header;