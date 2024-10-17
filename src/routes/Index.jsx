import { Link } from "react-router-dom";
import styles from "/styles/home.module.scss";

export default function Index() {
  const arr = [
    {
      title: "DIGITAL ART",
      cover:
        "https://dmychel.github.io/dabbler-media/art_design/whitney-desktop.jpg",
      route: "/digital-art",
    },
    {
      title: "Photography",
      cover: "https://dmychel.github.io/dabbler-media/photography/DSC09353.jpg",
      route: "/photography",
    },
    {
      title: "COMMISSIONS",
      cover: "/media/placeholder-image.webp",
      route: "",
    },
    {
      title: "DESIGN",
      cover: "/media/placeholder-image.webp",
      route: "",
    },
  ];

  return (
    <div className={styles.home}>
      {arr.map((card, index) => (
        <Link to={card.route} key={index}>
          <div className={styles.card}>
            <div className={styles.hoverDiv}>
              <h2>{card.title}</h2>
            </div>
            <img src={card.cover} alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
}
