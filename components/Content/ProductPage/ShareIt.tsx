import React, { useEffect, useState } from "react";
import { Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { blue, green } from "@mui/material/colors";
import { product } from "../../../interfaces/products_data";

interface PropsTypes {
  product_data: product;
}
export default React.memo(function ShareIt({ product_data }: PropsTypes) {
  const [link, setlink] = useState("");
  useEffect(() => {
    setlink(window.location.href);
  }, []);
  const router = useRouter();
  return (
    <Grid container direction={"row"}>
      <Grid item>
        <Link
          href={"https://www.facebook.com/sharer.php?u=" + link}
          target="_blank"
          rel="noopener"
        >
          <IconButton aria-label={"share to facebook"}>
            <FacebookIcon sx={{ color: blue[800] }} />
          </IconButton>
        </Link>
      </Grid>
      {/* whatsapp */}
      <Grid item>
        <Link
          href={
            "whatsapp://send?text=" + product_data.product_name + " - " + link
          }
          target="_blank"
          rel="noopener"
        >
          <IconButton aria-label={"share to whatsapp"}>
            <WhatsAppIcon sx={{ color: green[300] }} />
          </IconButton>
        </Link>
      </Grid>
      <Grid item>
        <Link
          href={
            "https://twitter.com/intent/tweet?url=" +
            link +
            "&text=" +
            product_data.product_name
          }
          target="_blank"
          rel="noopener"
        >
          <IconButton aria-label={"share to twitter"}>
            <TwitterIcon sx={{ color: blue[400] }} />
          </IconButton>
        </Link>
      </Grid>
      {/* email */}
      <Grid item>
        <Link
          href={
            "mailto:enteryour@addresshere.com?subject=" +
            product_data.product_name +
            "&body= Check this out: \n" +
            link
          }
          target="_blank"
          rel="noopener"
        >
          <IconButton aria-label={"send in email"}>
            <EmailIcon />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
});
