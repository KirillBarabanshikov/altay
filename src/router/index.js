import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Winter from "@/views/Seasons/Winter.vue";
import Spring from "@/views/Seasons/Spring.vue";
import Summer from "@/views/Seasons/Summer.vue";
import Autumn from "@/views/Seasons/Autumn.vue";
import Tract from "@/views/Tract.vue";
import Screen from "@/views/Screen.vue";
import Information from "@/views/Information.vue";
import Best from "@/views/Best.vue";
import Video from "@/views/Video.vue";
import History from "@/views/History.vue";
import ComplexVideo from "@/views/Complex/ComplexVideo.vue";
import ComplexDashboard from "@/views/Complex/ComplexDashboard.vue";
import Routes from "@/views/Routes.vue";
import Vkusno from "@/views/Vkusno.vue";
import Sanatoriums from "@/views/Complex/Sanatoriums.vue";

const routes = [
  {
    path: "/",
    name: "screen",
    component: Screen,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/winter",
    name: "winter",
    component: Winter,
  },
  {
    path: "/spring",
    name: "spring",
    component: Spring,
  },
  {
    path: "/summer",
    name: "summer",
    component: Summer,
  },
  {
    path: "/autumn",
    name: "autumn",
    component: Autumn,
  },
  {
    path: "/tract",
    name: "tract",
    component: Tract,
  },
  {
    path: "/information",
    name: "information",
    component: Information,
  },
  {
    path: "/best",
    name: "best",
    component: Best,
  },
  {
    path: "/video",
    name: "video",
    component: Video,
  },
  {
    path: "/history",
    name: "history",
    component: History,
  },
  {
    path: "/routes",
    name: "routes",
    component: Routes,
  },
  {
    path: "/complex",
    name: "complex",
    component: ComplexVideo,
  },
  {
    path: "/complex_dashboard",
    name: "complex_dashboard",
    component: ComplexDashboard,
  },
  {
    path: "/sanatoriums",
    name: "sanatoriums",
    component: Sanatoriums,
  },
  {
    path: "/vkusno",
    name: "vkusno",
    component: Vkusno,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
