import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
export default function BuyButton() {
  return (
    <Link passHref href={"/contact"}>
      <Button
        aria-label={"Contact us"}
        disableElevation
        variant="contained"
        size="large"
        sx={{ mb: 1, ml: 2 }}
      >
        Contact us
      </Button>
    </Link>
  );
}
