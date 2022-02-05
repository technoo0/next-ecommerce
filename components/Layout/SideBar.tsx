import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Card, Container } from "@mui/material";
import { categorie } from "../../interfaces/products_data";

import Link from "next/link";
const drawerWidth = 240;
interface propsTypes {
  categories: Array<categorie> | [];
  currentCategorie?: string;
}

export default function SideBar({ categories, currentCategorie }: propsTypes) {
  return (
    <Container
      sx={{
        flexShrink: 0,
        zIndex: 0,
        width: drawerWidth,
        marginTop: 5,

        marginRight: 2,
      }}
    >
      <Toolbar />
      <Card
        variant="outlined"
        sx={{
          marginY: 2,

          width: drawerWidth,
        }}
      >
        <Divider />
        <List>
          {categories.map((data, index) => (
            <Link
              href={"/categories/" + data.department_id}
              passHref
              key={index}
            >
              <ListItem divider={index != categories.length - 1} button>
                {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                <ListItemText
                  sx={{
                    color:
                      currentCategorie == data.department_id
                        ? "primary.main"
                        : "text.primary",
                    ".MuiListItemText-primary": {
                      fontWeight:
                        currentCategorie == data.department_id
                          ? "bold"
                          : "normal",
                    },
                  }}
                  primary={data.department_name}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Card>
    </Container>
  );
}
