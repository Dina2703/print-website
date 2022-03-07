import { Typography } from "@material-ui/core";
import Link from "next/link";

const products = [
  { name: "product-1" },
  { name: "product-2" },
  { name: "product-3" },
  { name: "product-4" },
];

function Catalog() {
  return (
    <div>
      <h4>Products page</h4>
      <Typography variant="h5" color="secondary" align="center">
        Typography MUI
      </Typography>
      {products.map((product) => {
        return (
          <div key={product.name}>
            <Link
              as={"/products/" + product.name}
              href="/products/[product]"
              passHref={true}
            >
              <button>{product.name}</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Catalog;
