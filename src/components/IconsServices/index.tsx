import { Grid, GridItem } from "@chakra-ui/layout";
import IconsTextServices from "./IconsTextServices";

export default function IconsServices() {
  return(
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      width="100%"
      justify="space-between"
      align="center"
      marginTop={["10","32"]}
      marginX="auto"
      maxWidth="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      <GridItem>
        <IconsTextServices icon="cocktail" text="vida noturna"/>
      </GridItem>

      <GridItem>
        <IconsTextServices icon="surf" text="praia" />
      </GridItem>

      <GridItem>
        <IconsTextServices icon="building" text="moderno" />
      </GridItem>

      <GridItem>
        <IconsTextServices icon="museum" text="clássico" />
      </GridItem>
      
      <GridItem colSpan={[2, 2, 2, 1]}>
        <IconsTextServices icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}