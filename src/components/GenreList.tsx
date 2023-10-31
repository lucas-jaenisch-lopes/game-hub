import {
  HStack,
  Heading,
  Image,
  Text,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data } = useGenres();

  return (
    <>
      <Heading marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List spacing="10px">
        {data.map((genre) => (
          <ListItem
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            paddingY="5px"
            key={genre.id}
            onClick={() => onSelectGenre(genre)}
          >
            <Link key={genre.id}>
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  borderRadius={8}
                  objectFit="cover"
                  boxSize="32px"
                />
                <Text whiteSpace="nowrap" variant="link" fontSize="large">
                  {genre.name}
                </Text>
              </HStack>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
