import { Flex, Spinner } from "@chakra-ui/react";

export default function Loading() {

  return (
    <Flex 
      align="center" 
      justify="center" 
      background="rgba(245, 248, 250, .9)" 
      position="fixed" 
      top="0" 
      right="0" 
      width="100vw" 
      height="100vh" 
      zIndex="20"
    >
      <Spinner size="xl" color="yellow.400"/>
    </Flex>
  )
}