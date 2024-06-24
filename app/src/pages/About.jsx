import React from "react";
import {
  Container,
  Typography,
  useMediaQuery,
  Box,
  Stack,
} from "@mui/material";

function About() {
  const mobile = useMediaQuery("(max-width:500px)");
  return (
    <Container maxWidth="md" sx={{ paddingBlock: 10 }}>
      <Typography
        variant={mobile ? "subtitle1" : "h5"}
        textAlign={"center"}
        marginBottom={3}
      >
        I'm a self-taught programmer with a passion for building beautiful and
        functional applications. For a decade, I honed my communication,
        leadership, and problem-solving skills in a fast-paced retail
        environment in a senior management role. Now, I'm eager to leverage
        those skills and my newfound programming expertise to contribute to a
        collaborative development team.
      </Typography>
      <Box sx={{ p: 2 }}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          spacing={2}
          alignItems={"center"}
        >
          <img src="/assets/icons8-html.svg" />
          <img src="/assets/icons8-css.svg" />
          <img src="/assets/icons8-javascript.svg" />
          <img src="/assets/icons8-typescript.svg" />
          <img src="/assets/icons8-python-50.svg" />
        </Stack>
      </Box>
    </Container>
  );
}

export default About;
