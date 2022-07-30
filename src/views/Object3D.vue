<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {
    Line, LineBasicMaterial, LineLoop, LineSegments,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Points,
    PointsMaterial,
    Scene,
    TorusGeometry,
    WebGLRenderer
} from "three";

const threeContainer = ref<HTMLCanvasElement>()

const doThree = () => {
    const canvas = threeContainer.value
    if(!canvas) return

    // 渲染器 - 与 canvas 绑定
    const renderer = new WebGLRenderer({ canvas: threeContainer.value })

    // 场景 - 光源、相机和各种物体的父容器
    const scene = new Scene()

    // 相机 - 需要添加到场景中
    const camera = new PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    camera.position.set(0, 0, 30)
    scene.add(camera)

    // 创建形状 - 环
    const geometry = new TorusGeometry(10, 3, 16, 100)

    // 使用材质 - 点
    const points = new Points(geometry, new PointsMaterial({ color: 0xffffff, size: 0.1 }))
    // points.position.x = -20
    // 使用材质 - 网
    const mesh = new Mesh(geometry, new MeshBasicMaterial({ color: 0xffffff }))
    // mesh.position.x = -10
    // 使用材质 - 线带
    const line = new Line(geometry, new LineBasicMaterial({ color: 0xffffff, linewidth: 1 }))
    // line.position.x = 0
    // 使用材质 - 线环
    const lineLoop = new LineLoop(geometry, new LineBasicMaterial({ color: 0xffffff, linewidth: 1 }))
    // lineLoop.position.x = 10
    // 使用材质
    const lineSegments = new LineSegments(geometry, new LineBasicMaterial({ color: 0xffffff, linewidth: 1 }))
    // lineSegments.position.x = 20

    scene.add(points)
    // scene.add(mesh)
    // scene.add(line)
    // scene.add(lineLoop)
    // scene.add(lineSegments)

    // 渲染
    const animation = (time: number) => {
        // points.rotation.x = time / 2000
        points.rotation.y = time / 1000

        renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animation)
}

onMounted(() => {
    doThree()
})
</script>

<template>
    <canvas class="object-3d-view" ref="threeContainer"/>
</template>

<style lang="scss" scoped>
.object-3d-view {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
