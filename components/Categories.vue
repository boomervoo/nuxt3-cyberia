<script setup lang="ts">
import { useProjectStore } from '~/stores/projects';
import {storeToRefs} from "pinia";

const categoriesStore = useProjectStore();
await categoriesStore.getCategories();
const {categories, currentCategoryId } = storeToRefs(categoriesStore);


const changeCategory = (id: number | null) => {
  if (currentCategoryId.value === id) {
    categoriesStore.setSelectedCategoryId(null);
  } else {
    categoriesStore.setSelectedCategoryId(id);
  }
};
</script>

<template>
    <div class="categories">
        <nav class="categories__navigation">
            <ul class="categories__list">
                <li
                    v-for="category in categories"
                    :key="category.id"
                    class="categories__link"
                    @click="changeCategory(category.id)"
                    :class="{ activeCard: currentCategoryId === category.id }"
                >
                    {{ category.name }}
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.categories {
    &__navigation {
        margin-top: 78px;
    }

    &__list {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
    }

    &__link {
        cursor: pointer;
        padding: 10px 29px;
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
</style>
