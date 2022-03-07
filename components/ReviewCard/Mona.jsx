import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";

import { blueGrey } from "@mui/material/colors";

const MonaReview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: blueGrey[500] }}
            aria-label="Mona profile letter"
          >
            MO
          </Avatar>
        }
        title="Mona"
      />
      <CardContent>
        <Rating value={5} readOnly />
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum maxime
          assumenda labore iste corrupti adipisci at laborum laudantium
          doloremque nesciunt.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MonaReview;
