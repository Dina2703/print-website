import {
  Container,
  TextField,
  CssBaseline,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";

function Contact() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ height: "80vh" }}>
        <Box mt={6}>
          <Typography variant="h4" color="secondary" gutterBottom>
            Обратная cвязь
          </Typography>
        </Box>
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
      </Container>
    </>
  );
}

export default Contact;
