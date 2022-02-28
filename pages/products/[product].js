import { useRouter } from "next/router";

function Product() {
  const router = useRouter();
  return (
    <div>
      This is a dynamic route for a each product info {router.query.product}
    </div>
  );
}

export default Product;
