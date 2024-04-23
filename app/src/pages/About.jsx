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
        I'm Jio, a passionate programmer with a knack for problem-solving and a
        drive to build beautiful, functional applications. For the past 4 years,
        I thrived in the fast-paced environment of retail management, honing my
        communication, teamwork, and leadership skills. Recently, my desire to
        create impactful experiences led me down the path of self-taught
        programming. Within the past year, I've immersed myself in the world of
        web development, mastering the fundamentals of HTML, CSS, and
        JavaScript. Eager to push my boundaries, I delved into frameworks like
        React and explored back-end development with Python and Django. My
        passion lies in building user interfaces that are not only visually
        appealing but also intuitive and user-friendly. Though my programming
        journey is young, I'm a quick learner fueled by a relentless curiosity.
        I'm eager to leverage my diverse skillset and collaborative spirit to
        contribute to a dynamic development team.
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
