import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
 return (
  <Box borderRadius="4px" overflow="hidden">
    <Image src="/londres.png" h="170px" w="100%"/>
    <Flex 
      padding="6" 
      align="center" 
      justify="space-between" 
      background="white" 
      border="1px" 
      borderColor="yellow.300" 
      borderTop="0"
    >
      <Flex direction="column">
        <Heading fontSize="xl" fontWeight="500">Londres</Heading>
        <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
          Reino Unido
        </Text>
      </Flex>
      <Image src="/reinoUnido.png" w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
    </Flex>
  </Box>
 )
}