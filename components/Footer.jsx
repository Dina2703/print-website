import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import MuiNextLink from "../components/MuiNextLink";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://YourFacebookLink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://YourInstagramLink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://YourInstagramLink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp fontSize="large" />
        </MuiNextLink>
      </Stack>
      <Typography align="center" color="common.white">
        © 2019 - {new Date().getFullYear()}, Brand Name
      </Typography>
    </Box>
  );
};

export default Footer;
