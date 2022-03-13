import {
  Container,
  TextField,
  CssBaseline,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { WhatsApp } from "@mui/icons-material";
import MuiNextLink from "../components/MuiNextLink";
import Meta from "../components/Meta";

function Contact() {
  return (
    <>
      <Meta title="контакты" />
      <CssBaseline />
      <Container maxWidth="md" sx={{ minHeight: "70vh" }}>
        <Box mt={6}>
          <Typography variant="h4" color="secondary" gutterBottom>
            Обратная cвязь
          </Typography>
        </Box>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <form
              noValidate
              autoComplete="off"
              // action="https://formsubmit.co/dinara.idrissova@list.ru"
              // method="POST"
            >
              <TextField
                variant="standard"
                type="text"
                color="secondary"
                id="your-full-name"
                required
                autoComplete="none"
                name="name"
                label="Ваше имя"
                fullWidth
                sx={{ mb: 3 }}
              />

              <TextField
                variant="standard"
                type="email"
                autoComplete="none"
                color="secondary"
                name="email"
                id="email"
                required
                label="Ваш e-mail"
                fullWidth
                placeholder="e.g. name@gmail.com"
                sx={{ mb: 3 }}
              />
              <TextField
                variant="standard"
                type="number"
                color="secondary"
                id="your-full-name"
                required
                autoComplete="none"
                name="телефон-номер"
                label="Номер телефона"
                fullWidth
                sx={{ mb: 3 }}
              />

              <TextField
                variant="standard"
                type="text"
                color="secondary"
                id="message-with-details"
                name="message"
                label="Сообщение"
                multiline
                required
                minRows={5}
                fullWidth
                sx={{ mb: 3 }}
              />

              <Button type="submit" variant="contained" color="secondary">
                отправить сообщение
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Aдрес</Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              г. Алматы ул. Казыбек би - 105, уг. пр. Сейфуллина - 470
            </Typography>
            <Typography variant="subtitle1">График работы:</Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              Пн.-Пт. с 9:00 до 19:00
              <br />
              Сб. с10:00 до 16:00
              <br />
              Воскресенье - выходной
            </Typography>

            <Typography variant="subtitle1">Kонтакты</Typography>

            <Typography variant="body1" color="primary">
              <MuiNextLink
                sx={{ textDecoration: "none", color: "palette.primary" }}
                href="tel:/tell number/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocalPhoneIcon fontSize="medium" />
                <Typography variant="p" xs={{ mb: 3 }}>
                  +7 771 000 00 00
                </Typography>
              </MuiNextLink>
              <br />
              <MuiNextLink
                sx={{ textDecoration: "none", color: "palette.primary" }}
                href="tel:/tell number/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocalPhoneIcon fontSize="medium" /> +7 771 000 00 00
              </MuiNextLink>
              <br />
              <MuiNextLink
                sx={{ textDecoration: "none", color: "palette.primary" }}
                href="mailto:dinara.idrissova@list.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailOutlineIcon fontSize="medium" /> example.print@mail.ru
              </MuiNextLink>
              <br />
              <MuiNextLink
                sx={{ textDecoration: "none", color: "palette.primary" }}
                href="https://wa.me/14042457101"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp fontSize="medium" /> +7 771 000 00 00
              </MuiNextLink>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Contact;
