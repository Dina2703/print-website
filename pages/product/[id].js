import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import MuiNextLink from "../../components/MuiNextLink";
import { Product } from "../../components/Product";
import { products } from "../../data";

export const getStaticProps = async ({ params }) => {
  const product = products.filter(
    (product) => product.id.toString() === params.id
  );

  return {
    props: {
      product: product[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

function product({ product }) {
  return (
    <>
      <div>
        <Container
          component="section"
          maxWidth="md"
          sx={{ mb: 6, mt: 4, height: "70vh" }}
        >
          <Product product={product} />
        </Container>
      </div>
    </>
  );
}
export default product;
