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
        I'm a passionate developer who taught myself the ins and outs of both
        front-end and back-end development. I'm constantly learning and pushing
        myself to grow. I'm excited to explore new challenges, collaborate with
        others, and contribute my skills to innovative projects.
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
          <img src="/assets/icons8-react.svg" />
          <img src="/assets/icons8-sass.svg" />
          <img src="/assets/material-ui.svg" />
          <img src="/assets/icons8-python-50.svg" />
          <img src="/assets/icons8-django-white.svg" />
          <img src="/assets/icons8-postgresql-50.svg" />
        </Stack>
      </Box>
    </Container>
  );
}

export default About;
