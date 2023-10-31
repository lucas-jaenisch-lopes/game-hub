import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const FavoriteButton = () => {
  const [favorited, setfavorited] = useState(false);

  return (
    <IconButton
      position="absolute"
      icon={favorited === false ? <AiOutlineStar /> : <AiFillStar />}
      fontSize={25}
      size="sm"
      aria-label="Favorite"
      right={2}
      top={2}
      color="gold"
      colorScheme="blackAlpha"
      onClick={() => setfavorited(!favorited)}
    />
  );
};

export default FavoriteButton;
