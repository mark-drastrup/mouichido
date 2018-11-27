import axios from "axios";
import store from "@/store/store";

export default () => {
    return axios.create({
        /* baseURL: "https://mouichido-server.herokuapp.com/", */
        baseURL: "http://localhost:3000/",
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}