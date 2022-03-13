import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import MuiNextLink from "./MuiNextLink";

const NavigationCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        sx={{ height: 220 }}
        image={product.img}
        title={product.imgAlt}
      />
      <CardContent sx={{ height: { xs: 225, sm: 300 } }}>
        <Typography component="h3" variant="h5" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: 160 }}>
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <MuiNextLink
          href="/product/[id]"
          linkAs={`/product/${product.id}`}
          underline="none"
        >
          <Button variant="contained" size="small" sx={{ mb: 2 }}>
            подробнее
          </Button>
        </MuiNextLink>
      </CardActions>
    </Card>
  );
};

export default NavigationCard;
