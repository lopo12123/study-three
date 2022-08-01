<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    MeshNormalMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer
} from "three";

const threeContainer = ref<HTMLCanvasElement>()

const doThree = () => {
    const canvas = threeContainer.value
    if(!canvas) return null

    const renderer = new WebGLRenderer({ canvas })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    const scene = new Scene()
    const camera = new PerspectiveCamera()

    // 物体
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshNormalMaterial()
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 10;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate()

    return (operate: OperateType) => {
        switch (operate) {
            case 'x+':
                camera.position.x += 1
                break
            case 'x-':
                camera.position.x -= 1
                break
            case 'y+':
                camera.position.y += 1
                break
            case 'y-':
                camera.position.y -= 1
                break
            case 'z+':
                camera.position.z += 1
                break
            case 'z-':
                camera.position.z -= 1
                break
            case 'rx+':
                camera.rotation.x += 1
                break
            case 'rx-':
                camera.rotation.x -= 1
                break
            case 'ry+':
                camera.rotation.y += 1
                break
            case 'ry-':
                camera.rotation.y -= 1
                break
            case 'rz+':
                camera.rotation.z += 1
                break
            case 'rz-':
                camera.rotation.z -= 1
                break
        }
    }
}

type OperateType = 'x+' | 'x-' | 'y+' | 'y-' | 'z+' | 'z-' | 'rx+' | 'rx-' | 'ry+' | 'ry-' | 'rz+' | 'rz-'
const moveTo = ref<((operate: OperateType) => void) | null>(null)

onMounted(() => {
    moveTo.value = doThree()
})
</script>

<template>
    <div class="object-control-view">
        <div class="switch-btn-group move">
            <div class="btn" @click="moveTo?.('x+')">x+</div>
            <div class="btn" @click="moveTo?.('x-')">x-</div>
            <div class="btn" @click="moveTo?.('y+')">y+</div>
            <div class="btn" @click="moveTo?.('y-')">y-</div>
            <div class="btn" @click="moveTo?.('z+')">z+</div>
            <div class="btn" @click="moveTo?.('z-')">z-</div>
        </div>
        <div class="switch-btn-group rotate">
            <div class="btn" @click="moveTo?.('rx+')">rx+</div>
            <div class="btn" @click="moveTo?.('rx-')">rx-</div>
            <div class="btn" @click="moveTo?.('ry+')">ry+</div>
            <div class="btn" @click="moveTo?.('ry-')">ry-</div>
            <div class="btn" @click="moveTo?.('rz+')">rz+</div>
            <div class="btn" @click="moveTo?.('rz-')">rz-</div>
        </div>
        <canvas class="object-3d-canvas" ref="threeContainer"/>
    </div>
</template>

<style lang="scss" scoped>
.object-control-view {
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
        width: 300px;
        height: 30px;
        left: 0;
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

    .move {
        top: 0;
    }

    .rotate {
        top: 30px;
    }
}
</style>
