import React from "react";
import { Container } from "@mui/material";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";

const SafeEnvironment: React.FC = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
