import {
  HStack,
  Heading,
  Image,
  Text,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      <List padding="10px" spacing="10px" px="10px">
        <Heading>Genres</Heading>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <Link key={genre.id}>
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  borderRadius="10px"
                  boxSize="32px"
                />
                <Text variant="link">{genre.name}</Text>
              </HStack>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
