import React from "react";
import { Container, Typography, useMediaQuery } from "@mui/material";

function Project() {
  const mobile = useMediaQuery("(max-width:500px)");
  return (
    <Container maxWidth="md" sx={{ paddingBlock: 6 }}>
      <Typography variant={mobile ? "h3" : "h2"} textAlign={"center"}>
        UNDER CONSTRUCTION
      </Typography>
      <img src="/assets/under-construction-pana.svg" />
    </Container>
  );
}

export default Project;
