import { Text, Image } from "@chakra-ui/react";
import {
  Card,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

interface Props {
  id: number;
  name: string;
  background_image: string;
}

const GameCard = ({ id, name, background_image }: Props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={background_image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{name}</Text>
          <Text color="blue.600" fontSize="2xl">
            $50
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
