import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function Infos() {
  return(
    <Flex align="center" justify="space-between">

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading ontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">50</Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">países</Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading ontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">60</Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">línguas</Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading ontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">27</Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  marginLeft="1"
                  color="gray.400"
                  width={["10px", "16px"]}
                  height={["10px", "16px"]}
                 />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Paris, Londres, Roma, Sdeney
              </PopoverBody>
            </PopoverContent>
          </Popover>
        
        </Text>
      </Flex>

    </Flex>
  )
}