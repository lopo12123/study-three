<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { BoxGeometry, Mesh, MeshNormalMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const threeContainer = ref<HTMLCanvasElement>()

const doThree = () => {
    const canvas = threeContainer.value
    if(!canvas) return null

    const renderer = new WebGLRenderer({ canvas })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    const scene = new Scene()
    const camera = new PerspectiveCamera()
    camera.position.z = 10

    const cube = new Mesh(
        new BoxGeometry(1, 1, 1),
        new MeshNormalMaterial()
    )
    scene.add(cube)

    const control = new OrbitControls(camera, canvas)
    control.update()

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        control.update();
    }

    animate()
}

onMounted(() => {
    doThree()
})
</script>

<template>
    <div class="orbit-control-view">
        <div class="tooltip">
            <div>旋转 - 左键点击拖动</div>
            <div>平移 - 右键点击拖动</div>
            <div>缩放 - 中键滚动</div>
        </div>
        <canvas class="object-3d-canvas" ref="threeContainer"/>
    </div>
</template>

<style lang="scss" scoped>
.orbit-control-view {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .tooltip {
        position: absolute;
        z-index: 10;
        top: 10px;
        left: 10px;
        color: #fff;
    }

    .object-3d-canvas {
        position: relative;
        width: 100%;
        height: 100%;
    }
}
</style>
