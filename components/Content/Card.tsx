import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { product } from "../../interfaces/products_data";
import { useRouter } from "next/router";
import Link from "next/link";
interface PropsTypes {
  data: product;
}
export default React.memo(function ActionAreaCard({ data }: PropsTypes) {
  const router = useRouter();
  const imageLink = (process.env.NEXT_PUBLIC_URL || "") + data.product_image_lg;
  return (
    <Link href={`/product/${data._id}`} passHref>
      <Card variant="outlined" sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={imageLink}
            alt={data.product_name || ""}
          />

          <CardContent sx={{ paddingY: 0 }}>
            <Grid
              container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item>
                <Typography variant="body2" textAlign={"center"}>
                  {data.product_name}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h6">LE {data.product_price}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
});
