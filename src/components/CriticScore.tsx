import { Badge, Tooltip } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Tooltip key={score} label={"Metascore"} placement="top">
      <span>
        <Badge colorScheme={color}>{score}</Badge>
      </span>
    </Tooltip>
  );
};

export default CriticScore;
