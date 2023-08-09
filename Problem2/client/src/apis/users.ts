import { TeamMemeber, Invite } from "../types";
import api from "./Axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers: async (): Promise<TeamMemeber[]> => {
    const response = await api.get("/users");
    return response.data;
  },
  getInvites: async (): Promise<Invite[]> => {
    const response = await api.get("/invites");
    return response.data;
  },
};
