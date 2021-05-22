import { Flex, Heading } from "@chakra-ui/react";

import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import IconsServices from '../components/IconsServices';
import Separador from "../components/Separador";
import Slider from "../components/Slider";


interface HomeProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - Home</title>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>

      <Header />
      <Banner />
      <IconsServices />
      <Separador />

      <Heading
        textAlign="center"
        fontWeight="500"
        marginBottom={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br/>
        Então escolha seu continente
      </Heading>

      <Slider continents={continents}/>  
    </Flex>
  )
}
