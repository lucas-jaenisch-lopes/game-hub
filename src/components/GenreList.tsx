import {
  HStack,
  Heading,
  Image,
  Text,
  Link,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      <List spacing="10px">
        <Heading>Genres</Heading>
        {isLoading && <Spinner></Spinner>}
        {data.map((genre) => (
          <ListItem
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            key={genre.id}
            onClick={() => onSelectGenre(genre)}
          >
            <Link key={genre.id}>
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  borderRadius="10px"
                  boxSize="32px"
                />
                <Text whiteSpace="nowrap" variant="link">
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
