import React from "react";
import {
  Box,
  Grid,
  Paper,
  Link,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <footer style={{ marginTop: 100 }}>
      <Box>
        <Paper square elevation={0}>
          <Divider />
          <Grid
            container
            spacing={5}
            justifyContent={"center"}
            sx={{ padding: 2 }}
          >
            <Grid item xs={12} sm={4}>
              {[
                ["Home", <HomeIcon key={1} />],
                ["Contact us", <PhoneIcon key={2} />],
                ["Help", <HelpIcon key={3} />],
              ].map((data, index) => (
                <Box key={index}>
                  <Button
                    color="inherit"
                    size="large"
                    sx={{ textTransform: "none" }}
                    startIcon={data[1]}
                  >
                    {data[0]}
                  </Button>
                </Box>
              ))}
            </Grid>
            <Grid item>
              <Box>
                <b>Address:</b>{" "}
                <Link
                  sx={{ color: "black", textDecorationColor: "black" }}
                  href="https://www.google.com/maps/place/Bibliotheca+Alexandrina/@31.2088705,29.9092012,15z/data=!4m2!3m1!1s0x0:0xa34cc632ec23e7?sa=X&ved=2ahUKEwi5icvxqbL1AhW2hP0HHTy1BfkQ_BJ6BAguEAU"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  12 Alex St. Alexandria Egypt
                </Link>
              </Box>
              <Box>
                <b>Email:</b> contactus@email.com
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <b>Phone:</b> 01000000000
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <Grid container spacing={0} direction={"row"}>
                  <Grid item>
                    <IconButton aria-label="Facebook" color="inherit">
                      <FacebookIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton aria-label="Twitter" color="inherit">
                      <TwitterIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton aria-label="WhatsApp" color="inherit">
                      <WhatsAppIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Divider />
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Box sx={{ padding: 2 }}>
                Copyright <Link href="#">STORE</Link> © 2021 Developed By{" "}
                <Link
                  href="https://www.facebook.com/marawan.fouda.9/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Marwan Fouda
                </Link>{" "}
                All Right Reserved.
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </footer>
  );
}
