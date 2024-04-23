import React from "react";
import { Heading } from "@chakra-ui/react";

const ManagerName = ({ name, cost }) => {
  return (
    <Heading>
      {name} - {cost}
    </Heading>
  );
};

export default ManagerName;
