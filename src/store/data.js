const state = () => ({
    data: {
        resource: {
            gold: 0,
            seed: {
                seed1: 0,
            },
            product: {
                product1: 0,
            },
        },
        farm: [],
        task: [],
    },
});

const getters = {
    get: (state) => {
        return state.data;
    },
};

const actions = {
    paytax(context) {
        context.commit("paytax");
    },
    save(context) {
        context.commit("save");
    },
    load(context) {
        let data = localStorage.getItem("data");
        if (data) {
            console.log("read from localstorage");
            context.commit("load", data);
        }
    },
};

const mutations = {
    paytax(state) {
        state.data.resource.gold--;
        console.log("gold", state.data.resource.gold);
    },
    load(state, data) {
        console.log("load done", JSON.stringify(data));
        state.data = JSON.parse(data);
    },
    save(state) {
        localStorage.setItem("data", JSON.stringify(state.data));
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
