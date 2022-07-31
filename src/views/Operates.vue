<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";

const threeContainer = ref<HTMLCanvasElement>()

const doThree = () => {
    const canvas = threeContainer.value
    if(!canvas) return null

    const renderer = new WebGLRenderer({ canvas })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    console.log(canvas.width, canvas.height)

    const scene = new Scene()
    const camera = new PerspectiveCamera()

    // 物体
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x2da0ff });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 10;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate()

    return (moveTo: 'x+' | 'x-' | 'y+' | 'y-' | 'z+' | 'z-') => {
        switch (moveTo) {
            case 'x+':
                cube.position.x += 1
                break
            case 'x-':
                cube.position.x -= 1
                break
            case 'y+':
                cube.position.y += 1
                break
            case 'y-':
                cube.position.y -= 1
                break
            case 'z+':
                cube.position.z += 1
                break
            case 'z-':
                cube.position.z -= 1
                break
        }
    }
}

const moveTo = ref<((moveTo: 'x+' | 'x-' | 'y+' | 'y-' | 'z+' | 'z-') => void) | null>(null)

onMounted(() => {
    moveTo.value = doThree()
})
</script>

<template>
    <div class="camera-type-view">
        <div class="switch-btn-group">
            <div class="btn" @click="moveTo?.('x+')">x+</div>
            <div class="btn" @click="moveTo?.('x-')">x-</div>
            <div class="btn" @click="moveTo?.('y+')">y+</div>
            <div class="btn" @click="moveTo?.('y-')">y-</div>
            <div class="btn" @click="moveTo?.('z+')">z+</div>
            <div class="btn" @click="moveTo?.('z-')">z-</div>
        </div>
        <canvas class="object-3d-canvas" ref="threeContainer"/>
    </div>
</template>

<style lang="scss" scoped>
.camera-type-view {
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
