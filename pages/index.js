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

const Homepage = () => {
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
