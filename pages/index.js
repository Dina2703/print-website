import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Hero from "../components/Hero";
import SectionAbout from "../components/SectionAbout";
import SectionImage from "../components/SectionImage";
import SectionReview from "../components/SectionReview";
import NavigationCard from "../components/NavigationCard";
import { Box, Button } from "@mui/material";
import MuiNextLink from "../components/MuiNextLink";
import HeroBtn from "../components/HeroBtn";
import { server } from "../config";

const Homepage = ({ products }) => {
  console.log(products);
  return (
    <>
      <Hero
        imgSrc="/hero-bg3.jpg"
        imgAlt="typography letters"
        title="Полиграфические услуги"
      />
      <HeroBtn />
      <SectionAbout />
      <SectionImage imgSrc="/products.jpg" imgAlt="print products" />
      <SectionReview />
    </>
  );
};

export default Homepage;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
