import React, { useState } from "react";
import Box from "@mui/material/Box";
import ItemContanser from "./itemContaner";
import { Grid } from "@mui/material";
import { product } from "../../interfaces/products_data";
interface PropsTypes {
  data: Array<product> | [];
}
function App({ data }: PropsTypes) {
  const [count, setCount] = useState(0);

  return (
    <Grid container direction={"column"} justifyContent={"center"}>
      <Grid item>
        <ItemContanser data={data} />
      </Grid>
    </Grid>
  );
}

export default React.memo(App);
