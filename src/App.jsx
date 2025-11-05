import {
  CardDiv,
  ImgDiv,
  Img,
  InfoParent,
  H2,
  P,
  Button,
  ButtonText,
} from "./components/Card";
import { Section } from "./components/Section";

export default function App() {
  const cards = [
    {
      title: "Sedans",
      text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      bg: "#e28625",
      btnColor: "#e28625",
      img: "./card-img1.svg",
    },
    {
      title: "SUVs",
      text: "Take an SUV for its spacious interior and power. Perfect for family trips or off-road adventures.",
      bg: "#006971",
      btnColor: "#006971",
      img: "./card-img2.svg",
    },
    {
      title: "Luxury",
      text: "Travel in style with a luxury car. Enjoy premium comfort and advanced features.",
      bg: "#004140",
      btnColor: "#004140",
      img: "./card-img3.svg",
    },
  ];

  return (
    <Section>
      {cards.map((c, i) => (
        <CardDiv key={i} bg={c.bg}>
          <ImgDiv>
            <Img src={c.img} alt="Card img" />
          </ImgDiv>
          <InfoParent>
            <H2>{c.title}</H2>
            <P>{c.text}</P>
          </InfoParent>
          <Button btnColor={c.btnColor}>
            <ButtonText>Learn More</ButtonText>
          </Button>
        </CardDiv>
      ))}
    </Section>
  );
}
