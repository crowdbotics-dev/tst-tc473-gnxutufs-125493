import axios from "axios"
import {
  TST_TC473_GNXUTUFSQU_USERNAME,
  TST_TC473_GNXUTUFSQU_PASSWORD
} from "react-native-dotenv"
const tSTTCgnxutufsqu = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC473_GNXUTUFSQU_USERNAME,
    password: TST_TC473_GNXUTUFSQU_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function tsttc473gnxutufsqu_get_getUserDetails_read(payload) {
  return tSTTCgnxutufsqu.get(`/getUser${payload.Details}`)
}
export const apiService = { tsttc473gnxutufsqu_get_getUserDetails_read }
