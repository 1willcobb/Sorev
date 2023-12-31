import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const ContactContainer = styled(Container)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 10px;
`;

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    info: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending data to a server or performing client-side validation.
    console.log(formData);
  };

  return (
    <ContactContainer maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" align="center">
          LET'S BUILD A COURSE
        </Typography>
      </Box>
      <br/>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="info"
              label="Additional Information"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.info}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Box mt={2} sx={{display: "flex", justifyContent: "center"}}>
          <Button type="submit" variant="contained" color="primary">
            CONTACT US
          </Button>
        </Box>
      </form>
    </ContactContainer>
  );
}

export default ContactUs;
