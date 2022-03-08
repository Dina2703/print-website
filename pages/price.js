import { Container, Typography } from "@mui/material";
import Hero from "../components/Hero";
import { Box } from "@mui/material";
import Image from "next/image";

function PriceList() {
  return (
    <div>
      <Hero imgSrc="/hero-main.jpg" imgAlt="pricing" title="Прайс лист" />
      <Box
        component="section"
        container
        sx={{
          mt: -10,
          width: "100%",
          height: "80vh",
          overflow: "hidden",
        }}
      >
        <Image
          src="/placeholder.jpg"
          alt="printing machine"
          layout="responsive"
          width={800}
          height={500}
        />
      </Box>
    </div>
  );
}

export default PriceList;
