<script lang="ts" setup>
import { onMounted, ref, shallowRef } from "vue";
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
    if(!canvas) return null

    // 渲染器 - 与 canvas 绑定
    const renderer = new WebGLRenderer({
        canvas,
        antialias: true,
    })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    // 场景 - 光源、相机和各种物体的父容器
    const scene = new Scene()

    // 相机 - 需要添加到场景中
    const camera = new PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    camera.position.set(0, 0, 10)
    scene.add(camera)

    // 创建形状 - 环
    const geometry = new TorusGeometry(2, 1, 16, 20)

    // 使用材质 - 点
    const points = new Points(geometry, new PointsMaterial({ color: 0xff0000, size: 0.3 }))
    // points.position.x = -20
    // 使用材质 - 网
    const mesh = new Mesh(geometry, new MeshBasicMaterial({ color: 0xffffff }))
    // mesh.position.x = -10
    // 使用材质 - 线带
    const line = new Line(geometry, new LineBasicMaterial({ color: 0x2da0ff, linewidth: 1 }))
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
        points.rotation.y = time / 2000
        mesh.rotation.y = time / 2000
        line.rotation.y = time / 2000
        lineLoop.rotation.y = time / 2000
        lineSegments.rotation.y = time / 2000

        renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animation)

    return (show: 'points' | 'mesh' | 'line' | 'lineLoop' | 'lineSegments') => {
        if(show === curr.value) return;

        scene.clear()
        curr.value = show

        switch (show) {
            case 'points':
                scene.add(points)
                break
            case 'mesh':
                scene.add(mesh)
                break
            case 'line':
                scene.add(line)
                break
            case 'lineLoop':
                scene.add(lineLoop)
                break
            case 'lineSegments':
                scene.add(lineSegments)
                break
        }
    }
}

const switchTo = ref<((show: 'points' | 'mesh' | 'line' | 'lineLoop' | 'lineSegments') => void) | null>(null)
const curr = ref<'points' | 'mesh' | 'line' | 'lineLoop' | 'lineSegments'>('points')

onMounted(() => {
    switchTo.value = doThree()
})
</script>

<template>
    <div class="object-3d-view">
        <div class="switch-btn-group">
            <div :class="['btn', curr === 'points' ? 'curr' : '']"
                 @click="switchTo?.('points')">points
            </div>
            <div :class="['btn', curr === 'mesh' ? 'curr' : '']"
                 @click="switchTo?.('mesh')">mesh
            </div>
            <div :class="['btn', curr === 'line' ? 'curr' : '']"
                 @click="switchTo?.('line')">line
            </div>
            <div :class="['btn', curr === 'lineLoop' ? 'curr' : '']"
                 @click="switchTo?.('lineLoop')">lineLoop
            </div>
            <div :class="['btn', curr === 'lineSegments' ? 'curr' : '']"
                 @click="switchTo?.('lineSegments')">
                lineSegments
            </div>
        </div>
        <canvas class="object-3d-canvas" ref="threeContainer"/>
    </div>
</template>

<style lang="scss" scoped>
.object-3d-view {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .object-3d-canvas {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .switch-btn-group {
        position: absolute;
        z-index: 10;
        width: 400px;
        height: 30px;
        left: 0;
        top: 0;
        border: solid 1px #2da0ff;
        background-color: #cccccc;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .btn {
            position: relative;
            height: 24px;
            padding: 0 10px;
            font-size: 12px;
            border: solid 1px #001c33;
            user-select: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .curr {
            background-color: #2da0ff;
        }
    }
}
</style>
