<template>
    <header class="header">
        <div class="header-container">
            <a href="#" class="logo">
                <NuxtLink to="/">
                    <img
                        class="logo__img"
                        src="~/public/img/logo.svg"
                        alt="logo"
                    />
                </NuxtLink>
            </a>
            <nav class="nav">
                <ul class="nav__items list-reset">
                    <li class="nav__item">
                        <NuxtLink class="nav__link" to="/agency">
                            Агентство
                        </NuxtLink>
                    </li>
                    <li class="nav__item">
                        <NuxtLink class="nav__link" to="/services">
                            Услуги
                        </NuxtLink>
                    </li>
                    <li class="nav__item">
                        <NuxtLink class="nav__link" to="/keys">
                            Кейсы
                        </NuxtLink>
                    </li>
                    <li class="nav__item">
                        <NuxtLink class="nav__link" to="/blog"> Блог </NuxtLink>
                    </li>
                    <li class="nav__item">
                        <NuxtLink class="nav__link" to="/contacts">
                            Контакты
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <BurgerMenu />
        </div>
    </header>
</template>

<script setup>
import BurgerMenu from './BurgerMenu';
</script>

<style lang="scss">
.header-container {
    display: flex;
    align-items: center;
    padding-top: 73px;
}

.logo {
    margin-right: 190px;
}

.nav {
    &__items {
        margin: 0;
        padding: 0;
        display: flex;
        gap: 62px;
    }

    &__item {
        color: #fff;
    }

    &__link {
        position: relative;
        font-weight: 400;
        font-size: 16px;
        color: #fff;
        transition: color 0.3s ease-in-out;

        &::before {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            height: 2px;
            width: 0;
            background-color: #cecece;
            transition: width 0.3s ease-in-out;
        }

        &:hover::before {
            width: 100%;
        }
        &:hover {
            color: #2d76f9;
        }

        &:active {
            color: #0a59e8;
        }
    }
}

@media (max-width: 1120px) {
    .logo {
        margin-right: 100px;
    }

    .nav__items {
        gap: 35px;
    }
}

@media (max-width: 768px) {
    .nav {
        display: none;
    }

    .logo {
        margin: 0;
    }

    .header-container {
        display: flex;
        justify-content: space-between;
    }
}

@media (max-width: 375px) {
    .header-container {
        position: relative;
        width: 100vw;
        padding: 55px 25px 21px 28px;
        background: #20212c;
        margin-left: -7vw;
    }

    .logo__img {
        width: 92px;
    }
}
</style>
