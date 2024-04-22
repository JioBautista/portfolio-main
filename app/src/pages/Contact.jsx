import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", paddingBlock: 10 }}>
      <Typography variant="h3" fontWeight={600} sx={{ mb: 3 }}>
        Lets Connect!
      </Typography>
      <Paper>
        <List>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="pachojio@gmail.com" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="linkedin.com/in/jio-pacho-87003b170" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="github.com/JioBautista" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}
export default Contact;
