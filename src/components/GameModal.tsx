import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  Text,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { platformIconMap } from "../services/platform-icon-map";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  gameDetails: Game;
}

export const GameModal = ({ isOpen, onClose, gameDetails }: Props) => (
  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{gameDetails.name}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Available on:</Text>

        <HStack minHeight={6}>
          {gameDetails.parent_platforms
            ?.map((p) => p.platform)
            ?.map((platform) => (
              <VStack>
                <Text>{platform.name}</Text>
              </VStack>
            ))}
        </HStack>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
