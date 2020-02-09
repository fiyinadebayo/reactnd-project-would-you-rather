import { SET_AUTH_USER } from "./constants";

export function setAuthUser (user) {
  return {
    type: SET_AUTH_USER,
    id: user.id,
  }
}
