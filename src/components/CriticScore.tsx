import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 50 ? "yellow" : "red";

  return <Badge colorScheme={color}>{score}</Badge>;
};

export default CriticScore;
