<script setup lang="ts">
import HeaderApp from '~/components/HeaderApp.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import FormApp from "~/components/FormApp.vue";
</script>

<template>
  <div>
    <div class="container">
      <HeaderApp />
      <Breadcrumbs />
      <slot />
    </div>
    <FormApp/>
  </div>
</template>

<style scoped></style>
