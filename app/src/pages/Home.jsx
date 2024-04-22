import React from "react";
import { Container, Typography, useMediaQuery } from "@mui/material";

function Home() {
  const mobile = useMediaQuery("(max-width:500px)");
  return (
    <Container maxWidth="md" sx={{ paddingBlock: 10 }}>
      <Typography
        variant={mobile ? "h2" : "h1"}
        textAlign={"center"}
        fontWeight={500}
      >
        Hello! I'm Jio
      </Typography>
      <Typography variant={mobile ? "h3" : "h2"} textAlign={"center"}>
        Welcome to my portfolio
      </Typography>
    </Container>
  );
}

export default Home;
