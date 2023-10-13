import { Text, Image } from "@chakra-ui/react";
import { Card, Stack, Heading, CardBody } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Stack mt="6" spacing="3">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Heading size="md">{game.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
