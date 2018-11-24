import Api from "@/services/api";

export default {
    index(search) {
        return Api().get("grammar", {
            params: {
                search: search
            }
        })
    },
    show(userId) {
        return Api().get(`grammar/${userId}`)
    },
    post(grammar) {
        return Api().post("grammar", grammar);
    },
    put(grammar) {
        return Api().put("grammar", grammar);
    }
};