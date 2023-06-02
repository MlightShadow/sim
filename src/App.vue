<template>
    <div id="app">
        <a @click="next_round" href="#">next_round</a>&nbsp;
        <a @click="clear_localstorage" href="#">clear</a>
        <router-view></router-view>

        <v-bottom-navigation v-model="value" fixed :absolute="false">
            <v-btn value="home" icon="home-o" to="/">
                <span>主页</span>
                <v-icon>mdi-home-outline</v-icon>
            </v-btn>
            <v-btn value="market" icon="shop-o" to="/market">
                <span>市场</span>
                <v-icon>mdi-shopping-outline</v-icon>
            </v-btn>
            <v-btn value="worker" icon="friends-o" to="/worker">
                <span>工人</span>
                <v-icon>mdi-account-hard-hat-outline</v-icon>
            </v-btn>
            <v-btn value="manage" icon="manager-o" to="/manage">
                <span>管理</span>
                <v-icon>mdi-domain</v-icon>
            </v-btn>
            <v-btn value="about" icon="setting-o" to="/about">
                <span>关于</span>
                <v-icon>mdi-information-outline</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return { active: "home" };
    },
    created() {
        this.$store.dispatch("load");
    },
    methods: {
        clear_localstorage() {
            localStorage.clear();
            location.reload();
        },
        next_round() {
            this.$store.dispatch("round_handle");
        },
    },
    mounted() {},
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
