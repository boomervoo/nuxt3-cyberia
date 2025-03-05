import type { ICategory } from '~/models/entites/categories';

export type IProject = {
    id: number;
    title: string;
    description: string;
    image_dark: string;
    categories: ICategory[];
};
