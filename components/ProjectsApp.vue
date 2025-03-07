<script setup lang="ts">
import { useProjectStore } from '~/stores/projects';
import { storeToRefs } from 'pinia';

const projectStore = useProjectStore();
await projectStore.getProjects();
const { projects, currentCategoryId } = storeToRefs(projectStore);

const filteredProjects = computed(() => {
    if (currentCategoryId.value == null) {
        return projects.value;
    }

    console.log('Фильтруем проекты по категории:', currentCategoryId.value);
    return projects.value.filter((project) =>
        project.categories.some(
            (category) => category.id === currentCategoryId.value
        )
    );
});
</script>

<template>
    <section class="cards">
        <ul class="container list-reset cards__items">
            <li
                class="cards__item"
                v-for="card in filteredProjects"
                :key="card.id"
            >
                <article class="card">
                    <a class="card__link" href="#">
                        <img
                            :src="card.image"
                            alt="Card image"
                            class="card__image card__arrow"
                            :style="
                                card.id === 3 ? 'transform: scale(-1, 1)' : ''
                            "
                            :class="{ 'card--transform': card.id === 7 }"
                        />
                        <div class="card__title">
                            <span class="offer__title">
                                {{ card.title }}
                            </span>
                        </div>
                        <div class="card__overlay">
                            <h3 class="card__title--overlay">
                                {{ card.title }}
                            </h3>
                            <p class="card__description">
                                Онлайн гипермаркет. Для компании были
                                разработаны сайт и мобильное приложение и т.д.
                            </p>
                        </div>
                    </a>
                </article>
            </li>
        </ul>
    </section>
</template>

<
<style lang="scss">
.cards {
    margin: 0;
    padding: 0;
    padding-bottom: 66px;

    &__items {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        row-gap: 31px;
    }

    &__item {
        position: relative;
        width: calc((100% - (40px * 2)) / 3);
        height: 378px;
    }
}

.card {
    position: relative;
    transition: transform 0.3s ease-in-out;
    height: 100%;

    &__image {
        height: 380px;
        border-radius: 12px;
    }

    &__image:nth-child(2) {
        transform: scale(-1, 1);
    }

    &__link {
        display: block;
        font-weight: 600;
        font-size: 20px;
        color: #fff;
    }

    &__title {
        position: absolute;
        display: flex;
        align-items: center;
        text-align: left;
        justify-content: center;
        top: 23px;
        right: 27px;
        width: 122px;
        height: 122px;
        border-radius: 5px;
        background: #313341;

        &::before {
            position: absolute;
            content: '';
            background-image: url('~/public/img/arrow.svg');
            width: 25px;
            height: 25px;
            top: -5px;
            right: -7px;
        }
    }

    &__overlay {
        display: none;
        position: absolute;
        flex-direction: column;
        justify-content: flex-end;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 29px 29px 24px 28px;
        border-radius: 12px;
        background: linear-gradient(0deg, #090b21 0%, rgba(49, 51, 65, 0) 100%);
        color: white;
        height: 100%;

        &::before {
            position: absolute;
            content: '';
            background-image: url('/img/arrow-mobile.svg');
            width: 17px;
            height: 17px;
            top: 60%;
        }
    }

    &__description {
        margin: 0;
        font-weight: 400;
        font-size: 13px;
        color: #fff;
        letter-spacing: 0.3px;
        line-height: 18px;
    }
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 8px 6px 29px 0 rgba(23, 27, 44, 0.41);
}

.offer__title {
    line-height: 30px;
    width: 78px;
    font-size: 20px;
}

@media (max-width: 768px) {
    .cards__item {
        width: calc(100% / 1);
    }
}

@media (max-width: 375px) {
    .cards {
        padding-bottom: 48px;

        &__items {
            row-gap: 20px;
        }

        &__item {
            height: 320px;
        }
    }

    .card {
        max-height: 320px;

        &__image {
            height: 320px;
            border-radius: 12px;
        }

        &__items {
            row-gap: 20px;
        }

        &__item {
            height: 100%;
        }

        &__overlay {
            display: flex;
        }

        &__title {
            display: none;

            &--overlay {
                margin: 0;
                margin-bottom: 5px;
                font-weight: 500;
                font-size: 18px;
                letter-spacing: 0.65px;
                color: #fff;
            }
        }
    }

    .card--transform {
        transform: scale(-1, 1);
    }
}
</style>
