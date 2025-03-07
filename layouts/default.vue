<script setup lang="ts">
import HeaderApp from '~/components/HeaderApp.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import FooterApp from '~/components/FooterApp.vue';
</script>

<template>
    <div class="container">
        <HeaderApp />
        <main>
            <Breadcrumbs />
            <slot />
        </main>
    </div>
    <FooterApp />
</template>

<style scoped></style>
