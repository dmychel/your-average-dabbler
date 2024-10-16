import styles from "/styles/home.module.scss";

export default function Index() {
  const arr = [
    {
      title: "DIGITAL ART",
      cover: "/public/media/placeholder-image.webp",
      link: "",
    },
    {
      title: "Photography",
      cover: "/public/media/placeholder-image.webp",
      link: "",
    },
    {
      title: "COMMISSIONS",
      cover: "/public/media/placeholder-image.webp",
      link: "",
    },
    {
      title: "DESIGN",
      cover: "/public/media/placeholder-image.webp",
      link: "",
    },
  ];

  return (
    <div className={styles.home}>
      {arr.map((card, index) => (
        <div className={styles.card} key={index}>
          <h2>{card.title}</h2>
          <img src={card.cover} alt="" />
        </div>
      ))}
    </div>
  );
}
