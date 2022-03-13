import { Button, Container, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import MuiNextLink from "./MuiNextLink";

export const Product = ({ product }) => {
  return (
    <>
      <Grid
        component="section"
        container
        maxWidth="md"
        sx={{
          position: "relative",
          height: "30vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Image
          src={product.img}
          alt={product.imgAlt}
          layout="fill"
          objectFit="cover"
          priority
        />
        <Grid
          container
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0, .2)",
          }}
        >
          <Grid container item justifyContent="center">
            <Typography
              mt={8}
              variant="h3"
              gutterBottom
              sx={{
                color: "#fff",
                fontWeight: 500,
                letterSpacing: 1,
                fontSize: { xs: 30, sm: 45 },
                textTransform: "uppercase",
              }}
            >
              {product.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box component="div" minHeight="30vh" mt={10}>
        <Typography
          variant="body1"
          align="center"
          component="p"
          color="text.secondary"
        >
          {product.desc}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <MuiNextLink href="/products" underline="none">
          <Button variant="contained" sx={{ bgcolor: "#20ABFF" }} size="small">
            Go back
          </Button>
        </MuiNextLink>
      </Box>
    </>
  );
};
