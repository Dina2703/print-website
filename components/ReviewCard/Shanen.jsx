import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";

const ReviewShanen = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: orange[500] }}
            aria-label="shanen profile letter"
          >
            SH
          </Avatar>
        }
        title="Shanen"
      />
      <CardContent>
        <Rating value={4.5} precision={0.5} readOnly />
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          assumenda a ex, fugit itaque autem error. Doloribus modi iusto,
          architecto suscipit sed numquam fuga quod!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewShanen;
