import bullsEye from "../assets/emojis/bulls-eye.webp";
import thumbsUp from "../assets/emojis/thumbs-up.webp";
import meh from "../assets/emojis/meh.webp";
import { Image, ImageProps, Tooltip } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "Exceptional", boxSize: "35px" },
  };

  return (
    <>
      <Tooltip key={rating} label={emojiMap[rating].alt} placement="right">
        <span>
          <Image {...emojiMap[rating]} marginTop={1} />
        </span>
      </Tooltip>
    </>
  );
};

export default Emoji;
