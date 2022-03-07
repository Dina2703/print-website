import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import MuiNextLink from "../components/MuiNextLink";

import Button from "@mui/material/Button";

const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/business-card.svg"
            alt="A Chef"
            layout="responsive"
            width={800}
            height={700}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h5"
            textAlign="center"
            gutterBottom
          >
            Мы упрощаем печать
          </Typography>
          <Typography textAlign="center" variant="body2">
            {`Мы предлагаем качественные услуги печати для широкого спектра продуктов, чтобы удовлетворить все потребности вашего бизнеса — от визитных карточек, брошюр, листовок до этикеток и больших баннеров. Что бы вам ни понадобилось напечатать, у нас есть решения для печати, которые помогут вашему бизнесу добиться успеха`}
          </Typography>
          <MuiNextLink href="/about-us" underline="none">
            <Button variant="outlined" size="large" sx={{ mt: 2 }}>
              About Us
            </Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
