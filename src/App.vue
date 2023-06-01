<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <!--资源栏位-->

        <field msg="Welcome to Your Vue.js App" />
        <!-- 选择 -->
        {{ $store.getters.get }}
    </div>
</template>

<script>
import field from "./components/farm.vue";

export default {
    name: "App",
    data() {
        return {
            timer: {}
        }
    },
    components: {
        field,
    },
    created() {
        this.$store.dispatch('load');
        console.log(this.$store.getters.get);
    },
    methods:{
        consul(){
            this.$store.dispatch('paytax')
            this.$store.dispatch('save');
            console.log("ceshi");
        }
    },
    mounted() {
        this.timer = setInterval(this.consul, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
