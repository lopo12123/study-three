<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {
    AmbientLight,
    BoxGeometry,
    Mesh,
    MeshLambertMaterial,
    PerspectiveCamera, PointLight,
    Scene, TextureLoader,
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
    camera.position.z = 10

    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshLambertMaterial()
    const cube = new Mesh(geometry, material)
    scene.add(cube)

    const envLight = new AmbientLight(0x111111)
    const pointLight = new PointLight(0xffffff, 1, 100)
    pointLight.position.set(5, 5, 10)
    scene.add(envLight, pointLight)

    const loader = new TextureLoader()
    loader.load(
        './texture/diana.png',
        (texture) => {
            material.map = texture
            material.needsUpdate = true
        },
        undefined,
        (err) => {
            console.log(err)
        }
    )

    function animate() {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        cube.rotation.z += 0.01
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate()
}

onMounted(() => {
    doThree()
})
</script>

<template>
    <canvas class="texture-view" ref="threeContainer"/>
</template>

<style lang="scss" scoped>
.texture-view {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
