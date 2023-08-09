import React from "react";
import { List } from "@mui/material";

const ListContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <List
      sx={{
        bgcolor: "#fff",
        p: 2,
        borderRadius: "1rem",
        boxShadow: "0px 3px 24px 0px rgba(130, 139, 151, 0.06)",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {children}
    </List>
  );
};

export default ListContainer;
