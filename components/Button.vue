<script setup lang="ts">
import { watch } from '@vue/runtime-core';
import { useMediaQuery } from '@vueuse/core';

const btnText = ref<string>('');

const isDisplayMobile = useMediaQuery('(max-width: 375px)');
const isDisplayDesktop = useMediaQuery('(min-width: 376px)');

watch(() => {
    if (isDisplayMobile.value) {
        btnText.value = 'Отправить';
    } else if (isDisplayDesktop.value) {
        btnText.value = 'Обсудить проект';
    }
});
</script>

<template>
    <button id="project-button" type="submit" class="btn checkbox__btn">
        {{ btnText }}
    </button>
</template>

<style scoped lang="scss">
.btn {
    --opacity: 1;
    --opacityColor: 1;
    cursor: pointer;
    border: 1px solid #2d76f9;
    border-radius: 85px;
    padding: 20px 55px;
    background: #2d76f9;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    opacity: var(--opacity);
    transition:
        opacity 0.3s ease-in-out,
        color 0.3s ease-in-out;

    &:hover {
        --opacity: 0.7;
    }
    &:active {
        --opacity: 0.9;
    }
}

@media (max-width: 375px) {
    .btn {
        padding: 15px 126px;
        font-size: 14px;
    }
}
</style>
