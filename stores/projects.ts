import { defineStore } from 'pinia';
import type { IProject } from '~/models/entites/projects';
import type { ICategory } from '~/models/entites/categories';
import { ref } from 'vue';
import { projectFetch } from '~/api/request';

interface ProductsState {
    items: IProject[];
}

interface CategoriesState {
    items: ICategory[];
}

export const useProjectStore = defineStore('projects', () => {
    const projects = ref<ProductsState[]>([]);
    const categories = ref<CategoriesState[]>([]);
    const currentCategoryId = ref<number | null>(null);

    const getProjects = async () => {
        try {
            const response = await projectFetch('projects', 'GET');
            projects.value = response.items;
        } catch (error) {
            console.error(error);
        }
    };
    const getCategories = async () => {
        try {
            const response = await projectFetch('project-categories', 'GET');
            categories.value = response.items;
            console.log(categories.value);
        } catch (error) {
            console.error(error);
        }
    };

    const setSelectedCategoryId = (id: number | null) => {
        currentCategoryId.value = id;
        console.log('Данные перезаписаны', currentCategoryId);
    };

    return {
        projects,
        categories,
        currentCategoryId,
        getProjects,
        getCategories,
        setSelectedCategoryId,
    };
});
