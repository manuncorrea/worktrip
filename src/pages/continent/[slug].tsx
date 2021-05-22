import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

import Loading from "../../components/Loading";
import Header from "../../components/Header";
import ContainerBanner from "../../components/ContainerBanner";
import Content from "../../components/Content";
import Infos from "../../components/Content/Infos";
import Cities from "../../components/Cities";

export default function Continent() {
  const router = useRouter();
  if(router.isFallback) {
    return <Loading />
  }

  return(
    <Flex direction="column">
      <Header />
      <ContainerBanner />

      <Flex
        direction="column" 
        maxW="1160px" 
        mx="auto" 
        mb="10" 
        px="1rem"
       >
         <Content />
         <Cities />
      </Flex>
    </Flex>
  )
}

