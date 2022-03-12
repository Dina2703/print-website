import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Link from "next/link";
import NavigationCard from "../../components/NavigationCard";
import Hero from "../../components/Hero";
import { products } from "../../data";

function Catalog() {
  return (
    <div>
      <Hero
        imgSrc="/products.jpg"
        imgAlt="printing products"
        title="Hаши Cервисы"
      />
      <Container maxWidth="md" sx={{ my: 10 }}>
        <Grid container spacing={2}>
          {products.map((product) => {
            return (
              <Grid
                container
                item
                justifyContent="center"
                xs={12}
                md={4}
                key={product.id}
              >
                <NavigationCard
                  imgSrc={product.img}
                  imgAlt={product.imgAlt}
                  title={product.title}
                  desc={product.desc}
                  pagePath="/products/[product]"
                  linkAs={"/products/" + product.title}
                  ctaText="подробнее"
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Catalog;
