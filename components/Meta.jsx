import Head from "next/head";

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{`Print-service | ${title}`}</title>
    </Head>
  );
}
Meta.defaultProps = {
  title: "Print-service",
  keywords:
    "printing  services, business cards, визитные карточки, календари, флаеры, надувные шары, вывески и баннеры , пригласительные открытки",
  description:
    "Мы предлагаем качественные услуги печати для широкого спектра продуктов, чтобы удовлетворить все потребности вашего бизнеса — от визитных карточек, брошюр, листовок до этикеток и больших баннеров. Что бы вам ни понадобилось напечатать, у нас есть решения для печати, которые помогут вашему бизнесу добиться успеха",
};

export default Meta;
