import { Link } from "react-router-dom";
import styles from "/styles/header.module.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
      </nav>

      <img src="/public/media/placeholder-image.webp" alt="" />

      <nav>
        <a href="#">SHOP</a>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}
