import Api from "@/services/api";

export default {
    create (data) {
        return Api().post("grammar", data);
    }
};