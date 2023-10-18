import { Text, HStack, Heading, Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <div>
      <Heading>Genres</Heading>
      {genres.map((genre) => (
        <HStack padding="5px">
          <Image
            src={genre.image_background}
            borderRadius="10px"
            boxSize="35px"
          />
          <Text>{genre.name}</Text>
        </HStack>
      ))}
    </div>
  );
};

export default GenreList;
