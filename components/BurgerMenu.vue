<script setup lang="ts">
const open = ref(false);
</script>

<template>
    <div class="burger">
        <button class="burger__open-button" @click="open = !open">
            <span class="burger__button-line" />
        </button>
        <div v-if="open" class="burger__menu-wrapper">
            <div class="burger__menu">
                <div class="burger__navigation-block">
                    <nav class="burger__menu-navigation menu">
                        <ul class="menu">
                            <li class="menu__link">О нас</li>
                            <li class="menu__link">Услуги</li>
                            <li class="menu__link">Проекты</li>
                            <li class="menu__link">Блог</li>
                            <li class="menu__link">Контакты</li>
                        </ul>
                    </nav>

                    <div class="burger__close-block" @click="open = !open">
                        <span key="menu" class="burger__close menu" />
                    </div>
                </div>
                <div class="burger__line"></div>
                <div class="contacts contact">
                    <h5 class="contacts__title">Контакты:</h5>
                    <a href="tel:+7 499 679 45 79" class="contacts__number"
                        >+7 499 679 45 79</a
                    >
                    <a href="mailto:hello@cyberia.ru" class="contacts__email"
                        >hello@cyberia.ru</a
                    >
                    <a href="" class="contacts__address">Аносова 3Б, оф. 1</a>
                </div>
                <div class="burger__line"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
[class*='contact'] {
    color: #9aa8ba;
    font-size: 18px;
    text-decoration: none;
}

[class*='contact']:hover {
    transition: 0.5s;
    color: #eef3ff;
}

.burger {
    display: none;
    position: relative;

    &__open-button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        position: relative;
        z-index: 2;
        width: 24px;
        height: 24px;
    }

    &__button-line {
        position: absolute;
        content: '';
        top: 10px;
        right: 0px;
        display: block;
        width: 24px;
        height: 3px;
        background-color: #eef3ff;
        border-radius: 3px;

        &::before {
            content: '';
            top: 10px;
            right: 0px;
            display: block;
            position: absolute;
            width: 24px;
            height: 3px;
            background-color: #eef3ff;
            border-radius: 3px;
        }

        &::after {
            content: '';
            bottom: 10px;
            right: 0px;
            display: block;
            position: absolute;
            width: 24px;
            height: 3px;
            background-color: #eef3ff;
            border-radius: 3px;
        }
    }

    &__menu-wrapper {
        background-color: #24252f;
        position: fixed;
        overflow: auto;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
    }

    &__menu {
        padding: 97px 92px 145px 67px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__navigation-block {
        display: flex;
        justify-content: space-between;
        padding-bottom: 68px;
    }

    &__menu-navigation {
        padding: 34px 0 0 0;
        display: flex;
        flex-direction: column;
        color: #000000;
    }

    &__close-block {
        position: relative;
        width: 31px;
        height: 31px;
    }

    &__close {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 31px;
        height: 31px;
        opacity: 0.3;

        &::before,
        &::after {
            position: absolute;
            top: 0;
            right: 15px;
            content: '';
            height: 31px;
            width: 2px;
            background-color: #b7c6e7;
        }

        &::before {
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
        }
    }

    &__close-block:hover {
        transition: 1s;

        background-color: #100d0d;
    }

    &__line {
        margin: 0 auto;
        width: 100%;
        height: 2px;
        background-color: #2b2d3a;
    }
}

.menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__link {
        cursor: pointer;
        list-style: none;
        color: #eef3ff;

        &:hover {
            transition: 0.5s;
            border-bottom: 1px solid #2d76f9;
        }
    }
}

.contacts {
    padding-bottom: 68px;
    display: flex;
    flex-direction: column;

    &__title {
        padding-top: 38px;
    }

    &__number {
        padding-top: 42px;
    }

    &__email {
        padding-top: 19px;
    }

    &__address {
        padding-top: 19px;
    }
}

@media (max-width: 1024px) {
    .burger {
        display: block;
    }
}
</style>
