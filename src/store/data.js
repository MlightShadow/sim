const state = () => ({
    data: {
        round: 0,
        resource: {
            money: 0,
        },
        market: {
            worker: [],
            project: [],
        },
        mine: {
            buff_position: [],
            worker: [],
            project: [],
        },
    },
});

const getters = {
    get: (state) => {
        return state.data;
    },
};

const actions = {
    round_handle(context) {
        context.commit("next_round");
        context.commit("money_change");
        //todo
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
    next_round(state) {
        state.data.round++;
        console.log("回合前进到了" + state.data.round);
    },
    money_change(state) {
        state.data.resource.money++;
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
