import styles from '/styles/artDesign.module.scss'

export default function DigitalArt() {
  const arr = [
    "whitney-desktop.jpg",
    "alejandro.png",
    "mac.png",
    "marvin.jpg",
    "neo.png",
    "biggie.jpg",
    "TORQUE24.png",
  ]
  return (
    <div className={styles.gallery}>
      <div>
        {arr.map((picture, index) => (
          <img key={index} src={`https://dmychel.github.io/dabbler-media/art_design/${picture}`} alt="" />
        ))}
      </div>
    </div>
  );
}
