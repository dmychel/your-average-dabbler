import styles from "/styles/home.module.scss";

export default function Index() {
  const arr = [
    {
      title: "DIGITAL ART",
      cover: "https://placehold.co/600x400",
      link: "",
    },
    {
      title: "Photography",
      cover: "https://placehold.co/600x400",
      link: "",
    },
    {
      title: "COMMISSIONS",
      cover: "https://placehold.co/600x400",
      link: "",
    },
    {
      title: "DESIGN",
      cover: "https://placehold.co/600x400",
      link: "",
    },
  ];

  return (
    <div className={styles.home}>
      {arr.map((card, index) => (
        <div
          className={styles.card}
          key={index}
          style={{ backgroundImage: `url("https://placehold.co/600x400")` }}
        >
          <h2>{card.title}</h2>
        </div>
      ))}
    </div>
  );
}
