import { Image, HStack, useDisclosure } from "@chakra-ui/react";
import { Card, Heading, CardBody } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import FavoriteButton from "./FavoriteButton";
import { GameModal } from "./GameModal";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card>
      <FavoriteButton />
      <Image
        src={getCroppedImageUrl(game.background_image)}
        borderTopRadius="lg"
      />
      <CardBody onClick={onOpen}>
        <GameModal gameDetails={game} isOpen={isOpen} onClose={onClose} />
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading minHeight={15} fontSize="2xl">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
