import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Hero from "../components/Hero";
import SectionAbout from "../components/SectionAbout";
import SectionImage from "../components/SectionImage";
import SectionReview from "../components/SectionReview";
import NavigationCard from "../components/NavigationCard";
import { Box, Button } from "@mui/material";
import MuiNextLink from "../components/MuiNextLink";

const Homepage = () => {
  return (
    <>
      <Container maxWidth="sm"></Container>
      <Hero
        imgSrc="/hero-bg3.jpg"
        imgAlt="typography letters"
        title="Полиграфические услуги"
      />

      <Grid
        position="sticky"
        top="70px"
        container
        justifyContent="flex-end"
        spacing={14}
        width="102%"
        zIndex="100"
      >
        <MuiNextLink href="/contact" underline="none">
          <Button
            variant="contained"
            sx={{ bgcolor: "#20ABFF" }}
            style={{ size: { xs: "small", sm: "medium" } }}
          >
            связаться с нами
          </Button>
        </MuiNextLink>
      </Grid>

      <SectionAbout />
      <SectionImage imgSrc="/products.jpg" imgAlt="print products" />
      <SectionReview />
    </>
  );
};

export default Homepage;
