<script setup lang="ts">
import Categories from '~/components/Categories.vue';
import ProjectsApp from '~/components/ProjectsApp.vue';
</script>

<template>
    <section>
        <h2 class="title">Кейсы</h2>
        <Categories />
        <ProjectsApp />
    </section>
</template>

<style lang="scss">
.title {
    font-weight: 600;
    font-size: 48px;
    color: #eef3ff;
}
</style>
