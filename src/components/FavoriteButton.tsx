import { StarIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";

const FavoriteButton = () => {
  return (
    <IconButton
      position="absolute"
      icon={<AiOutlineStar />}
      aria-label="Favorite"
      right={2}
      top={2}
      color="gold"
      colorScheme="blackAlpha"
    />
  );
};

export default FavoriteButton;
