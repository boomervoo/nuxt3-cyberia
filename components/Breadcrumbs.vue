<script setup></script>

<template>
    <section class="breadcrumbs">
        <div class="breadcrumb">
            <a class="breadcrumb__one" href="#">Главная</a>
            <span class="slash">&thinsp; / &thinsp;</span>
            <a class="breadcrumb__two" href="#">Кейсы</a>
        </div>
    </section>
</template>

<style lang="scss">
.breadcrumbs {
    padding: 65px 0 65px;
}

.breadcrumb {
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

    .crump {
        padding-top: 45px;
    }
}
</style>
