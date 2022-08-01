import { createRouter, createWebHashHistory, RouteRecordRaw, RouterOptions } from "vue-router";
import BasicUsage from "@/views/BasicUsage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: {
            name: 'BasicUsage'
        }
    },
    {
        path: '/basic-usage',
        name: 'BasicUsage',
        component: BasicUsage
    },
    {
        path: '/gltf-loader',
        name: 'GLTFLoader',
        component: () => import("@/views/GLTFLoader.vue")
    },
    {
        path: '/object-3d',
        name: 'Object3D',
        component: () => import("@/views/Object3D.vue")
    },
    {
        path: '/control',
        name: 'Control',
        component: () => import("@/views/Control.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export {
    routes,
    router
}
