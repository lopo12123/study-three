<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {
    AmbientLight,
    BoxGeometry,
    Mesh,
    MeshBasicMaterial, MeshLambertMaterial,
    PerspectiveCamera, PointLight,
    Scene,
    SphereGeometry, TextureLoader,
    Vector2,
    WebGLRenderer
} from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";

const threeContainer = ref<HTMLCanvasElement>()

const doThree = () => {
    const canvas = threeContainer.value
    if(!canvas) return null

    const renderer = new WebGLRenderer({ canvas })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    const scene = new Scene()
    const camera = new PerspectiveCamera()
    camera.position.z = 20

    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshLambertMaterial()
    const cube = new Mesh(geometry, material)
    cube.position.set(5, 0, 0)
    scene.add(cube)

    const envLight = new AmbientLight(0x111111)
    const pointLight = new PointLight(0xff0000, 1, 100)
    pointLight.position.set(0, 0, 0)
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

    const sphere = new Mesh(
        new SphereGeometry(1, 32, 32),
        new MeshBasicMaterial({ color: 0xff0000 })
    )
    scene.add(sphere)

    const renderScene = new RenderPass(scene, camera)
    const bloomPass = new UnrealBloomPass(new Vector2(canvas.clientWidth, canvas.clientHeight), 1.5, 1, 0)
    bloomPass.renderToScreen = true

    const composer = new EffectComposer(renderer)
    composer.addPass(renderScene)
    composer.addPass(bloomPass)


    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        cube.rotation.z += 0.01
        composer.render(scene, camera);
    }

    animate()
}

onMounted(() => {
    doThree()
})
</script>

<template>
    <canvas class="bloom-view" ref="threeContainer"/>
</template>

<style lang="scss" scoped>
.bloom-view {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
