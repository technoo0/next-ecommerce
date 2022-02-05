import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainAppBar from "./AppBar";
import MainSideBar from "./SideBar";
import SelectCategory from "./SelectCategory";
import Footer from "./Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Toolbar } from "@mui/material";
import React, { ReactChildren, ReactChild } from "react";
interface categorie {
  department_name: string;
  department_id: string;
  department_numProducts: number;
}
interface AuxProps {
  children: ReactChild | ReactChildren;
  showSide: boolean;
  categories?: Array<categorie>;
  currentCategorie?: string;
}
export default function Layout({
  children,
  showSide,
  categories = [],
  currentCategorie = "",
}: AuxProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <MainAppBar />
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          {/* {matches ? <SmallPage /> : <BigScreen />} */}
          <Grid
            item
            xs={12}
            lg={10}
            sx={{ display: "flex", flexDirection: matches ? "column" : "row" }}
          >
            {matches ? (
              <>
                <Toolbar />
                {showSide ? (
                  <SelectCategory
                    categories={categories}
                    currentCategorie={currentCategorie}
                  />
                ) : null}
              </>
            ) : (
              <>
                {showSide ? (
                  <MainSideBar
                    categories={categories}
                    currentCategorie={currentCategorie}
                  />
                ) : null}
              </>
            )}
            <div style={{ width: "100%" }}>
              {!matches ? <Toolbar /> : null}
              <Box
                component="main"
                sx={{ width: "100%", marginTop: 5, paddingLeft: 2 }}
              >
                {children}
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div style={{ position: "relative", zIndex: 100 }}>
        <Footer />
      </div>
    </div>
  );
}
