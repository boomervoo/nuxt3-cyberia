<script setup lang="ts">
import { useProjectStore } from '~/stores/projects';
import { storeToRefs } from 'pinia';

const categoriesStore = useProjectStore();
await categoriesStore.getCategories();
await categoriesStore.setSelectedCategoryId();
const { categories, currentCategoryId } = storeToRefs(categoriesStore);

const filterCategory = (id: number | null) => {
    if (currentCategoryId.value === id) {
        categoriesStore.setSelectedCategoryId(null);
    } else {
        categoriesStore.setSelectedCategoryId(id);
    }
};
</script>

<template>
    <div class="categories">
        <ul class="categories__list">
            <li
                v-for="category in categories"
                :key="category.id"
                class="categories__link"
                @click="filterCategory(category.id)"
                :class="{ activeCard: currentCategoryId === category.id }"
            >
                {{ category.name }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.categories {
    padding-bottom: 48px;

    &__list {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
    }

    &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 14px 32px;
        letter-spacing: 1px;
        background-color: #2b2d3a;
        color: #eef3ff;
        font-weight: 300;
        font-size: 20px;
        border-radius: 7px;
        box-shadow: -5px 12px 41px 2px rgba(23, 27, 44, 0.75);

        &:hover {
            transition: 0.3s;
            color: #2d76f9;
        }

        &:active {
            color: #0a59e8;
        }
    }
}

.activeCard {
    background-color: #0a59e8;
}

@media (max-width: 1120px) {
    .categories {
        &__list {
            justify-content: center;
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
        }

        &__link {
            width: calc((100% - (40px * 1)) / 2);
            text-align: center;
        }
    }
}

@media (max-width: 768px) {
    .categories {
        padding-top: 70px;
    }
}

@media (max-width: 375px) {
    .logo__img {
        max-width: 93px;
    }

    .categories {
        padding-top: 30px;
        padding-bottom: 40px;

        &__list {
            margin: 0;
            gap: 8px;
            row-gap: 18px;
        }

        &__link {
            width: calc((100% - 10px) / 2);
            padding: 9px 5px;
            font-size: 11px;
            box-shadow: 8px 15px 29px 1px rgba(23, 27, 44, 0.41);
        }
    }
}
</style>
