/* eslint-disable @next/next/no-img-element */
import { Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import React, { useDebugValue, useEffect } from "react";
import { product } from "../../../interfaces/products_data";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import ShareIt from "./ShareIt";
import BuyButton from "./BuyButton";
import { CardMedia } from "@mui/material";
interface PropsTypes {
  product_data: product;
}
declare type ImageLoader = (resolverProps: ImageLoaderProps) => string;
declare type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};
const sanityIoImageLoader: ImageLoader = ({ src, width }) => {
  return `${process.env.NEXT_PUBLIC_URL}${src}`;
};
export default function Layout({ product_data }: PropsTypes) {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        item
        xs={12}
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Grid item xs={12} sm={6} xl={4}>
          <Zoom>
            <img
              src={"/products" + product_data.product_image_lg}
              alt={product_data.product_name || ""}
              width={"100%"}
            />
            {/* <Image
              loader={sanityIoImageLoader}
              src={imageLink}
              alt={product_data.product_name}
              width={700}
              height={700}
              loading="lazy"
            /> */}
          </Zoom>
        </Grid>
        <Grid item xs={12} sm={6} xl={4} sx={{ marginTop: 10 }}>
          <Typography variant="h1" sx={{ fontSize: "2rem", marginBottom: 1 }}>
            {product_data.product_name}
          </Typography>{" "}
          <Typography
            variant="h2"
            sx={{
              paddingLeft: 2,
              fontSize: "1.8rem",
              fontWeight: 100,
              marginBottom: 2,
            }}
          >
            {product_data.product_price}{" "}
            <span style={{ fontSize: "1.4rem" }}>EGP</span>
          </Typography>{" "}
          <BuyButton />
          <ShareIt product_data={product_data} />
        </Grid>
        <Grid item xs={12} lg={10} sx={{ marginBottom: 2 }}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={11} lg={10} container>
          <Grid item xs={12} lg={9}>
            <Typography variant="subtitle1">
              {product_data.product_description}
            </Typography>{" "}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
