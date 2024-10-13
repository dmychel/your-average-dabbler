import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
      </nav>

      <nav>
        <a href="#">SHOP</a>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}
