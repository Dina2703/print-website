import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Link from "next/link";
import NavigationCard from "../../components/NavigationCard";

const products = [
  { name: "product-1" },
  { name: "product-2" },
  { name: "product-3" },
  { name: "product-4" },
];

function Catalog() {
  return (
    <div>
      <h4>Products page</h4>
      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={4}>
            <NavigationCard
              imgSrc="./bsns-card.jpg"
              imgAlt="визитные карточки"
              title="Bизитные карточки"
              desc="Визитные карточки обеспечивают запоминающийся способ связи с другими. Выберите из множества размеров и форм и добавьте свой индивидуальный штрих."
              pagePath="./визитки"
              ctaText="подробнее"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={4}>
            <NavigationCard
              imgSrc="/calendars.jpg"
              imgAlt="календари"
              title="Kалендари"
              desc="Открытки и открытки отлично подходят для продвижения вашего бизнеса. Отправьте свое сообщение с индивидуальным дизайном и полноцветной печатью на карточках различных размеров."
              pagePath="./календари"
              ctaText="подробнее"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={4}>
            <NavigationCard
              imgSrc="/flyers.jpg"
              imgAlt="флаеры"
              title="Флаеры"
              desc="Флаеры — недорогой и эффективный способ рекламы вашего бренда. Рекламируйте свое следующее мероприятие или запуск продукта с помощью привлекательных полноцветных листовок."
              pagePath="./флаеры"
              ctaText="подробнее"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={4}>
            <NavigationCard
              imgSrc="/ballons2.jpg"
              imgAlt="надувные шары"
              title="Hадувные шары"
              desc="Центральные украшения из воздушных шаров наполнят вашу вечеринку причудливым наслаждением."
              pagePath="./шары"
              ctaText="подробнее"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={4}>
            <NavigationCard
              imgSrc="/banner.jpg"
              imgAlt="вывески и баннеры"
              title="Баннеры"
              desc="Выделите свой бизнес с помощью широкоформатной печати. Баннеры для внутреннего и наружного использования"
              pagePath="./баннеры"
              ctaText="подробнее"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={4}>
            <NavigationCard
              imgSrc="/invit-cards.jpg"
              imgAlt="пригласительные открытки"
              title="Пригласительные открытки"
              desc="Выделите свой бизнес с помощью широкоформатной печати. Баннеры для внутреннего и наружного использования"
              pagePath="./баннеры"
              ctaText="подробнее"
            />
          </Grid>
        </Grid>
      </Container>
      <Typography variant="h5" color="secondary" align="center">
        Typography MUI
      </Typography>
      {products.map((product) => {
        return (
          <div key={product.name}>
            <Link
              as={"/products/" + product.name}
              href="/products/[product]"
              passHref={true}
            >
              <button>{product.name}</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Catalog;
