import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from 'react-icons/ri';

export default function Header () {

  const { asPath } = useRouter()
  const notHomePage = asPath !== '/'
  return(
    <Flex
      background="white"
      width="100%"
      as="header"
      marginX="auto"
      paddingX="1rem"
      height={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        height="100%"
        marginX="auto"
        width="100%"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start" />
            </a>
          </Link>
        )}
        <Image
        width={["81px", "184px" ]}
        src="/logo.svg"
        alt="logo"
        justifyContent="center"
        gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}