import { server } from "../../../config";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import MuiNextLink from "../../../components/MuiNextLink";
import { Product } from "../../../components/Product";

function product({ product }) {
  return (
    <>
      <div>
        <Container
          component="section"
          maxWidth="md"
          sx={{ mb: 6, mt: 4, height: "70vh" }}
        >
          <Product
            imgSrc={product.img}
            imgAlt={product.imgAlt}
            title={product.title}
            subtitle={product.desc}
          />
        </Container>
      </div>
    </>
  );
}
export default product;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/products/${context.params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/products`);
  const products = await res.json();

  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
