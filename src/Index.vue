<script lang="ts" setup>
import { routes } from "@/routers";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const menuItem = ref<string[]>(routes
    .filter(x => !!x.name)
    .map(x => x.name))

const jumpTo = (name: string) => {
    router.push({ name })
}
</script>

<template>
    <div class="root-view">
        <div class="menu">
            <div class="menu-item" :key="idx"
                 v-for="(item, idx) in menuItem"
                 @click="jumpTo(item)">
                {{ item }}
            </div>
        </div>
        <div class="viewer">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
.root-view {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu {
        position: relative;
        width: 300px;
        height: 100%;
        overflow: hidden auto;

        .menu-item {
            position: relative;
            width: 100%;
            height: 29px;
            line-height: 29px;
            border-bottom: solid 1px #777;
            cursor: pointer;

            &:hover {
                background-color: #ccc;
            }
        }
    }

    .viewer {
        position: relative;
        width: calc(100% - 300px);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
