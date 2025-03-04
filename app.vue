<script setup lang="ts">
const apiUrl = useRuntimeConfig().public.apiFeedbacksUrl;
console.log(apiUrl);
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style scoped lang="scss"></style>
