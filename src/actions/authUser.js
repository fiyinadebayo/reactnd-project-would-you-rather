import { SET_AUTH_USER } from "./constants";

export function setAuthUser (id) {
  return {
    type: SET_AUTH_USER,
    id,
  }
}
