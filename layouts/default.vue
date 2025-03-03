<script setup lang="ts">
import HeaderApp from '~/components/HeaderApp.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
</script>

<template>
    <div class="container">
        <HeaderApp />
        <Breadcrumbs />
        <slot />
    </div>
</template>

<style scoped></style>
