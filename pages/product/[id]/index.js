import { server } from "../../../config";
import Link from "next/link";

function product({ product }) {
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.desc}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

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

export default product;
