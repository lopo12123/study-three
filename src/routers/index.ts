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
        path: '/object-control',
        name: 'ObjectControl',
        component: () => import("@/views/ObjectControl.vue")
    },
    {
        path: '/camera-control',
        name: 'CameraControl',
        component: () => import("@/views/CameraControl.vue")
    },
    {
        path: '/orbit-control',
        name: 'OrbitControl',
        component: () => import("@/views/OrbitControl.vue")
    },
    {
        path: '/texture',
        name: 'Texture',
        component: () => import("@/views/Texture.vue")
    },
    {
        path: '/bloom',
        name: 'Bloom',
        component: () => import("@/views/Bloom.vue")
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
