<script setup lang="ts">
import HeaderApp from '~/components/HeaderApp.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import FooterApp from '~/components/FooterApp.vue';
</script>

<template>
    <div>
        <div class="container">
            <HeaderApp />
            <Breadcrumbs />
            <slot />
        </div>
        <FooterApp />
    </div>
</template>

<style scoped></style>
