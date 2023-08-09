import React, { useState, useMemo } from "react";
import {
  Box,
  Chip,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  ExpandLess,
  ChevronRight as ExpandMore,
  Smartphone as SmartphoneIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

import { UserShortData } from "../../types";

interface ItemProps extends Partial<UserShortData> {
  status?: string;
}

const Item: React.FC<ItemProps> = ({
  name,
  lastName,
  phone,
  email,
  status,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const colorMode = useMemo(() => {
    switch (status) {
      case "request":
        return "secondary";
      case "pending":
        return "warning";
      case "approved":
        return "primary";
      case "declined":
        return "error";
      case "invited":
        return "default";
      default:
        return "default";
    }
  }, [status]);

  return (
    <Box sx={{ ":not(:last-child)": { borderBottom: "1px solid #F8F8F9" } }}>
      <ListItemButton onClick={handleOpen}>
        <ListItemText
          sx={{ ">span": { fontSize: "11px" } }}
          primary={!!name || !!lastName ? `${name} ${lastName}` : phone}
        />
        <Chip
          label={status || "invited"}
          size="small"
          color={colorMode}
          sx={{ mr: 2, width: "70px", fontSize: "11px" }}
        />
        {open ? (
          <ExpandLess sx={{ color: "#3E4959" }} />
        ) : (
          <ExpandMore sx={{ color: "#3E4959" }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {phone && (
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <SmartphoneIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={phone}
                sx={{ ">span": { fontSize: "11px" } }}
              />
            </ListItemButton>
          )}
          {email && (
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EmailIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={email}
                sx={{ ">span": { fontSize: "11px" } }}
              />
            </ListItemButton>
          )}
        </List>
      </Collapse>
    </Box>
  );
};

export default Item;
