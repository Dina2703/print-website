import { Button } from "@mui/material";
import { useRouter } from "next/router";
import MuiNextLink from "../../components/MuiNextLink";

function Product() {
  const router = useRouter();
  return (
    <div>
      This is a dynamic route for a each product info {router.query.product}
      <MuiNextLink href="/" underline="none">
        <Button variant="contained" sx={{ bgcolor: "#20ABFF" }} size="small">
          Go Back
        </Button>
      </MuiNextLink>
    </div>
  );
}

export default Product;
