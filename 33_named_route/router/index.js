// 创建 router
import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'


export default new VueRouter({
    routes:[
        {
            path: "/home",
            name: "home",
            component: Home,
            children: [
                {
                    path: "message",
                    name: "message",
                    component: Message,
                    children: [
                        {
                            path: "detail",
                            name: "detail",
                            component: Detail,
                        },
                    ]
                },
                {
                    path: "news",
                    name: "news",
                    component: News,
                }
            ]
        },
        {
            path: "/about",
            name: "about",
            component: About
        }
    ]
})