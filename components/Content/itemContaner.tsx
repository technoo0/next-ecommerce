import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";
import { product } from "../../interfaces/products_data";
interface PropsTypes {
  data: Array<product> | [];
}
export default React.memo(function ItemContaner({ data }: PropsTypes) {
  return (
    <Grid container spacing={1} sx={{ padding: 2 }}>
      {data.map((elementInArray, index) => (
        <Grid
          item
          container
          justifyContent={"center"}
          xs={12}
          sm={4}
          lg={3}
          xl={3}
          key={index}
        >
          <Card key={index} data={elementInArray} />
        </Grid>
      ))}
    </Grid>
  );
});
