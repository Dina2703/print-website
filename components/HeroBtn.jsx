import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import MuiNextLink from "./MuiNextLink";

const HeroBtn = () => {
  return (
    <Grid
      position="sticky"
      top="70px"
      container
      justifyContent="flex-end"
      spacing={14}
      width="102%"
      zIndex="100"
    >
      <MuiNextLink href="/contact" underline="none">
        <Button
          variant="contained"
          sx={{ bgcolor: "#20ABFF" }}
          style={{ size: { xs: "small", sm: "medium" } }}
        >
          связаться с нами
        </Button>
      </MuiNextLink>
    </Grid>
  );
};

export default HeroBtn;
