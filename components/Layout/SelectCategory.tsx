import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import { categorie } from "../../interfaces/products_data";
import { useRouter } from "next/router";

interface propsTypes {
  categories: Array<categorie> | [];
  currentCategorie?: string;
}
export default function SelectCategory({
  categories,
  currentCategorie,
}: propsTypes) {
  const [Page, setPage] = React.useState("");
  const router = useRouter();
  const handleChange = (event: SelectChangeEvent) => {
    if (router.query.id != event.target.value) {
      router.push(event.target.value);
      setPage(event.target.value);
    }
  };
  useEffect(() => {
    if (currentCategorie) {
      setPage(currentCategorie);
    }
  }, [currentCategorie]);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <Select
          value={Page}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          fullWidth
        >
          <MenuItem value="">Select a page</MenuItem>
          {categories.map((data, index) => (
            <MenuItem
              key={index}
              value={data.department_id}
              sx={{
                color:
                  currentCategorie == data.department_id
                    ? "primary.main"
                    : "text.primary",

                fontWeight:
                  currentCategorie == data.department_id ? "bold" : "normal",
              }}
            >
              {data.department_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
