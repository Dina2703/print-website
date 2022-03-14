import React from "react";
import Link from "next/link";
import { Container, Button } from "@mui/material";
import MuiNextLink from "../components/MuiNextLink";

const NotFound = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ minHeight: "70vh" }}>
        <h1>Oooops.....</h1>
        <h2>That page cannot be found.</h2>
        <MuiNextLink href="/products" underline="none">
          <Button variant="contained" sx={{ bgcolor: "#20ABFF" }} size="small">
            Go back
          </Button>
        </MuiNextLink>
      </Container>
    </div>
  );
};
export default NotFound;
