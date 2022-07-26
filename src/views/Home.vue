<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { BoxGeometry, Mesh, MeshNormalMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";

const threeContainer = ref<HTMLCanvasElement>()

const doThree = () => {
    const canvas = threeContainer.value
    if(!canvas) return

    // 渲染器 - 与 canvas 绑定
    const renderer = new WebGLRenderer({
        canvas: threeContainer.value
    })

    // 场景 - 光源、相机和各种物体的父容器
    const scene = new Scene()

    // 相机 - 需要添加到场景中
    const camera = new PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    camera.position.set(0, 0, 1)
    scene.add(camera)

    // 物体 - 创建网格(形状+材质)
    const geometry = new BoxGeometry(0.2, 0.2, 0.2)
    const material = new MeshNormalMaterial()
    const cube = new Mesh(geometry, material)
    scene.add(cube)

    // 渲染
    // renderer.render(scene, camera)

    const animation = (time: number) => {
        cube.rotation.x = time / 2000
        cube.rotation.y = time / 1000

        renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animation)
}

onMounted(() => {
    if(!!threeContainer.value) {
        doThree()
    }
})
</script>

<template>
    <div class="home-view">
        <canvas class="three-container" ref="threeContainer"/>
    </div>
</template>

<style lang="scss" scoped>
.home-view {
    position: relative;
    width: 100%;
    height: 100%;

    .three-container {
        position: relative;
        width: 400px;
        height: 300px;
        border: solid 1px #777;
    }
}
</style>
