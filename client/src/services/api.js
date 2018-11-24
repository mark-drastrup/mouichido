import axios from "axios";
import store from "@/store/store";

export default () => {
    return axios.create({
        baseURL: "https://mouichido-server.herokuapp.com/",
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}