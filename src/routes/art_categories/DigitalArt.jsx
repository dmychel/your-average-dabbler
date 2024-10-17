import Gallery from "../../components/Gallery";

export default function DigitalArt() {
  const arr = [
    {
      picture: "whitney-desktop.jpg",
      link: "https://dmychel.github.io/dabbler-media/art_design",
    },
    {
      picture: "alejandro.png",
      link: "https://dmychel.github.io/dabbler-media/art_design",
    },
    {
      picture: "mac.png",
      link: "https://dmychel.github.io/dabbler-media/art_design",
    },
    {
      picture: "marvin.jpg",
      link: "https://dmychel.github.io/dabbler-media/art_design",
    },
    {
      picture: "neo.png",
      link: "https://dmychel.github.io/dabbler-media/art_design",
    },
    {
      picture: "biggie.jpg",
      link: "https://dmychel.github.io/dabbler-media/art_design",
    },
    {
      picture: "TORQUE24.png",
      link: "https://dmychel.github.io/dabbler-media/art_design",
    },
  ];

  return (
    <div>
      <div>
        <Gallery arr={arr} />
      </div>
    </div>
  );
}
