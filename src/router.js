import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./view/Home";
import Worker from "./view/Worker";
import Market from "./view/Market";
import Manage from "./view/Manage";
import About from "./view/About";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/worker", name: "worker", component: Worker },
    { path: "/market", name: "market", component: Market },
    { path: "/manage", name: "manage", component: Manage },
    { path: "/about", name: "about", component: About },
];

Vue.use(VueRouter);

export default new VueRouter({
    routes,
});
