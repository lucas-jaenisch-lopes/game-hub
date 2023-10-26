import { HStack, Icon, Tooltip } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import { platformIconMap } from "../services/platform-icon-map";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack>
      {platforms?.map((platform) => (
        <Tooltip key={platform.id} label={platform.name} placement="top">
          <span>
            <Icon
              key={platform.id}
              as={platformIconMap[platform.slug]}
              color="gray.500"
            />
          </span>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
