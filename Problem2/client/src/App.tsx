import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography, Container } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

import Users from "./apis/users";
import { Invite, TeamMemeber } from "./types";
import ListContainer from "./components/Container";
import Item from "./components/ListItem";

function App() {
  const [users, setUsers] = useState<TeamMemeber[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);

  useEffect(() => {
    (async function fetchData() {
      try {
        const [usersData, invitesData] = await Promise.all([
          Users.getUsers(),
          Users.getInvites(),
        ]);
        setUsers(usersData);
        setInvites(invitesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();

  }, []);
  const administrators = useMemo(
    () => users.filter((user) => user.role !== "Standard"),
    [users]
  );
  
  const standardUsers = useMemo(
    () => users.filter((user) => user.role === "Standard"),
    [users]
  );
  return (
    <Container maxWidth="sm" sx={{ bgcolor: "#FAFAFD", p: "16px!important", height:'100vh' }}>
      <Box sx={{ mb: "2rem" }}>
        <Box sx={{ display: "flex", alignItems: "center", m: "10px" }}>
          <AdminPanelSettingsIcon color="action" fontSize="small" />
          <Typography
            sx={{
              color: "#828B97",
              fontFamily: "Inter",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "-0.22px",
            }}
          >
            Administrators
          </Typography>
        </Box>
        <ListContainer>
          {administrators.map(({ id, user, status }) => (
            <Item key={id} {...user} status={status} />
          ))}
          {invites.map((user) => (
            <Item key={user.id} {...user} />
          ))}
        </ListContainer>
      </Box>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", m: "10px" }}>
          <PersonIcon color="action" fontSize="small" />
          <Typography
            sx={{
              color: "#828B97",
              fontFamily: "Inter",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "-0.22px",
            }}
          >
            Standard Users
          </Typography>
        </Box>
        <ListContainer>
          {standardUsers.map(({ id, user, status }) => (
            <Item key={id} {...user} status={status} />
          ))}
        </ListContainer>
      </Box>
    </Container>
  );
}

export default App;
