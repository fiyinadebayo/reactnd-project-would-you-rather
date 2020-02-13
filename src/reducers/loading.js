import { RECEIVE_USERS } from "../utils/constants"

export default function loading (state = true, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return false
    default:
      return state
  }
}
