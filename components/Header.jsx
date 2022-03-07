import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import { Grid, IconButton, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import MuiNextLink from "./MuiNextLink";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "./BackToTop";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: `home`, path: `/` },
  { title: `about us`, path: `/about-us` },
  { title: `menu`, path: `/menu` },
  { title: `gallery`, path: `/gallery` },
  { title: `contact`, path: `/contact` },
];

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                  <Grid container alignItems="baseline">
                    <Grid item>
                      <Home
                        sx={{
                          color: (theme) => theme.palette.common.white,
                        }}
                        fontSize="large"
                      />
                    </Grid>
                    <Grid alignSelf="center">
                      <Typography
                        variant="h5"
                        color="white"
                        component="span"
                        gutterBottom
                      >
                        Brand
                      </Typography>
                    </Grid>
                  </Grid>
                </MuiNextLink>
              </IconButton>
              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="primary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
