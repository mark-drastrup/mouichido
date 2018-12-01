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
    showGrammar(grammarId) {
        return Api().get(`grammar/review/${grammarId}`)
    },
    post(grammar) {
        return Api().post("grammar", grammar);
    },
    put(grammar) {
        return Api().put("grammar", grammar);
    },
    delete(grammarId) {
        return Api().delete(`grammar/${grammarId}`)
    }
};