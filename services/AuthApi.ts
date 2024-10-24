import { api } from "../api";

async function logIn(body) {
  const res = await api.post("/login", body);

  return res.data;
}

async function checkVersion() {
  const res = await api.get("/version");

  return res.data;
}

async function checkPlan() {
  const res = await api.get("/plan/check");
  return res.data;
}

export const AuthApi = {
  logIn,
  checkVersion,
  checkPlan,
};
