import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import MuiNextLink from "./MuiNextLink";

const NavigationCard = ({ imgSrc, imgAlt, title, desc, pagePath, ctaText }) => {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia sx={{ height: 220 }} image={imgSrc} title={imgAlt} />
      <CardContent sx={{ height: { xs: 225, sm: 300 } }}>
        <Typography component="h3" variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: 160 }}>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <MuiNextLink href={pagePath} underline="none">
          <Button variant="contained" size="small" sx={{ mb: 2 }}>
            {ctaText}
          </Button>
        </MuiNextLink>
      </CardActions>
    </Card>
  );
};

export default NavigationCard;
