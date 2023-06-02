import vue from "vue";
import vuex from "vuex";
import data from "./data";

vue.use(vuex);

export default new vuex.Store({
    modules: {
        data,
    },
});
