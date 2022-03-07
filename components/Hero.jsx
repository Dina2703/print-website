import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const Hero = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        height: "40vh",
        width: "100vw",
        overflow: "hidden",
        zIndex: -100,
        mb: 5,
      }}
    >
      <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      <Grid
        container
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0, .7)",
        }}
      >
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              color: "secondary.main",
              fontWeight: 500,
              letterSpacing: 2,
            }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
