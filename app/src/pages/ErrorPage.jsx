import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: 5,
        gap: 3,
      }}
    >
      <Typography variant="h6">404 NOT FOUND</Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained">Return to page</Button>
      </Link>
    </Container>
  );
}

export default ErrorPage;
