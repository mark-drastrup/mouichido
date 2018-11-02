import Api from "@/services/api";

export default {
    index(search) {
        return Api().get("index", {
            params: {
                search: search
            }
        })
    },
    show(grammarId) {
        return Api().get(`grammar/${grammarId}`)
    },
    post(grammar) {
        return Api().post("grammar", grammar);
    },
    put(grammar) {
        return Api.put(`grammar/${grammar.id}`, grammar);
    }
};