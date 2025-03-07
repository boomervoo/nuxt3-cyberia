<script setup></script>

<template>
    <div class="breadcrumb">
        <NuxtLink class="breadcrumb__one" to="#">Главная</NuxtLink>
        <span class="slash">&thinsp; / &thinsp;</span>
        <a class="breadcrumb__two" href="#">Кейсы</a>
    </div>
</template>

<style lang="scss">
.breadcrumbs {
    padding: 65px 0 65px;
}

.breadcrumb {
    padding: 65px 0 65px;
    font-size: 14px;

    &__one {
        font-weight: 400;
        font-size: 16px;
        color: #9aa8ba;

        &:focus {
            outline-offset: 5px;
        }

        &__:hover {
            color: #fff;
        }
    }

    &__two {
        font-weight: 400;
        font-size: 16px;
        color: #c4d2e3;

        &:focus {
            outline-offset: 5px;
        }

        &__:hover {
            color: #fff;
        }
    }
}

.slash {
    font-size: 16px;
    color: #9aa8ba;
}

@media (max-width: 375px) {
    .breadcrumbs {
        padding: 42px 0 0;
    }

    .breadcrumb {
        &__one {
            font-size: 12px;
        }

        &__two {
            font-weight: 300;
            color: #9aa8ba;
            font-size: 12px;
        }
    }
}
</style>
