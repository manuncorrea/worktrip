import { Flex, Heading,Text, Image } from "@chakra-ui/react";

export default function Banner () {
  return(
    <Flex
      width="100%"
      height={["163px", "250px", "250px", "335px"]}
      backgroundImage="url('/banner.png')"
      backgroundPosition={["100% 20%","100% 20%","100% 30%"]}
      backgroundRepeat="no-repeat"
      bgSize="cover"
    >

      <Flex justify={['center', 'space-between']} align="center" w="100%" mx="auto" px={["4","10","15","20","36"]}>
        <div>
          <Heading color="gray.100" fontWeight="500" fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}>
            5 continentes,<br />infinitas possibilidades.
          </Heading>
          <Text color="gray.300" mt="5" fontSize={["0.8rem","xl"]} maxW={["100%", "100%", "100%", "550px"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
          <Image
            w={["300px","300px","300px","430px"]}
            display={['none','none', 'block']}
            src="/airplane.svg"
            alt="Image do banner"
            transform="translateY(48px)"
            ml="8"
          />
      </Flex>

    </Flex>
  )
}