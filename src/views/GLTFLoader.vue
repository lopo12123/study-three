<script lang="ts" setup>
// 场景、相机、渲染器
import { AmbientLight, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { onMounted, ref } from "vue";

const threeContainer = ref<HTMLCanvasElement>()

const doThree = () => {
    const canvas = threeContainer.value
    if(!canvas) return

    // 渲染器 - 与 canvas 绑定
    const renderer = new WebGLRenderer({ canvas: threeContainer.value })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setClearColor(0xffffff)

    // 场景 - 光源、相机和各种物体的父容器
    const scene = new Scene()

    // 相机 - 需要添加到场景中
    const camera = new PerspectiveCamera()
    camera.position.z = 5

    const loader = new GLTFLoader();
    loader.load(
        './models/monkey.gltf',
        (gltf) => {
            // 猴头添加到场景
            scene.add(gltf.scene)

            // 光源 - 猴头默认为反光材质, 即无光为黑色
            const light = new AmbientLight(0xffffff)
            scene.add(light)

            renderer.render(scene, camera)

            // 渲染
            // ;(function animate() {
            //     renderer.render(scene, camera)
            //     requestAnimationFrame(animate)
            // })()
        },
        (xhr) => {
            console.log(`loading...  ${ (xhr.loaded * 100 / xhr.total).toFixed(2) }%`)
        },
        (err) => {
            console.log(err)
        }
    )
}

onMounted(() => {
    if(!!threeContainer.value) {
        doThree()
    }
})
</script>

<template>
    <canvas class="gltf-loader-view" ref="threeContainer"/>
</template>

<style lang="scss" scoped>
.gltf-loader-view {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
