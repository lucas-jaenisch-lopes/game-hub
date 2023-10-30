import { Image, HStack, Box, IconButton } from "@chakra-ui/react";
import { Card, Heading, CardBody } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import FavoriteButton from "./FavoriteButton";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineStar } from "react-icons/ai";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <FavoriteButton />
      <Image src={getCroppedImageUrl(game.background_image)} />

      <CardBody>
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
