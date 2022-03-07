import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

const AlexReview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Alex profile letter">
            AL
          </Avatar>
        }
        title="Alex"
      />
      <CardContent>
        <Rating value={5} readOnly />
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          exercitationem debitis rem impedit earum labore accusamus? Labore fuga
          porro ipsa itaque harum eaque eius inventore perferendis tenetur,
          minima officia ea?
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlexReview;
