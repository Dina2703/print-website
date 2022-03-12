import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import MuiNextLink from "../../components/MuiNextLink";

function Product() {
  const router = useRouter();
  return (
    <div>
      <Container
        component="section"
        maxWidth="md"
        sx={{ mb: 6, mt: 4, height: "70vh" }}
      >
        <Box component="div" minHeight="90%">
          <Typography
            variant="h4"
            align="center"
            component="h3"
            color="primary"
          >
            {router.query.product}
          </Typography>
        </Box>
        <Box
          sx={{
            height: 100,
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <MuiNextLink href="/" underline="none">
            <Button
              variant="contained"
              sx={{ bgcolor: "#20ABFF" }}
              size="small"
            >
              Go Back
            </Button>
          </MuiNextLink>
        </Box>
      </Container>
    </div>
  );
}

export default Product;
