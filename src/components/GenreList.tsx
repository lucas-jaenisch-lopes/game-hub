import { HStack, Heading, Image, Text, Button, Link } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <div>
      <Heading>Genres</Heading>
      {data.map((genre) => (
        <Link>
          <HStack padding="5px">
            <Image
              src={genre.image_background}
              borderRadius="10px"
              boxSize="35px"
            />
            <Text variant="link">{genre.name}</Text>
          </HStack>
        </Link>
      ))}
    </div>
  );
};

export default GenreList;
