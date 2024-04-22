import React from "react";
import {
  Container,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Collapse,
  Link,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Project() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Container maxWidth="md" sx={{ paddingBlock: 10 }}>
      <Typography
        variant="h3"
        fontWeight={600}
        sx={{ mb: 5, textAlign: "center" }}
      >
        PROJECTS
      </Typography>

      <Stack
        direction={"row"}
        gap={3}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {/* FIRST PROJECT */}
        <Card sx={{ maxWidth: 375 }}>
          <CardHeader title="Invoice App" subheader="React & Django" />
          <CardContent>
            <Typography>
              This invoice management app allows you to create, view, edit, and
              delete invoices (CRUD operations) with ease. Built with a
              user-friendly React frontend and a powerful Django backend using
              REST framework.
            </Typography>
            <Link
              href="https://invoice-app-jio.vercel.app/"
              variant="body1"
              underline="hover"
            >
              Link to project
            </Link>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore expand={expanded} onClick={handleExpandClick}>
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout={"auto"} unmountOnExit>
            <CardContent>
              <Typography variant="h6">Frontend:</Typography>
              <Typography>- React</Typography>
              <Typography>- React-Router V6</Typography>
              <Typography>- React-Hook-Form</Typography>
              <Typography>- Axios</Typography>
              <Typography>- Material UI</Typography>
              <Typography>- Zustand State Management</Typography>

              <Typography variant="h6">Backend:</Typography>
              <Typography>- Django & REST framework</Typography>
              <Typography>- Django-cors-headers</Typography>
              <Typography>- Gunicorn</Typography>
              <Typography>- Psycopg2</Typography>

              <Typography variant="h6">Hosting:</Typography>
              <Typography>- Vercel</Typography>
              <Typography>- DigitalOcean</Typography>
            </CardContent>
          </Collapse>
        </Card>

        {/* SECOND PROJECT */}
        <Card sx={{ maxWidth: 375, maxHeight: 320 }}>
          <CardHeader title="LogIn System" subheader="Work in Progress" />
          <CardContent>
            <Typography>
              I'm currently building a login system to explore and understand
              user authentication, validation, and authorization mechanisms.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}

export default Project;
