import { create } from "zustand";
import { AuthApi } from "../../services/AuthApi";
import { api } from "../../api";

interface State {
  token: string;
}

interface Actions {
  login: (body: { email: string; password: string }) => Promise<void>;
}

export const useAuth = create<State & Actions>((set) => ({
  token: "",
  login: async (body) => {
    const { token } = await AuthApi.logIn(body);
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
    set({ token });
  },
}));
