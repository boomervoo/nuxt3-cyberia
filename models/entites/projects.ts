import type { ICategory } from '~/models/entites/categories';

export interface IProject {
    id: number;
    title: string;
    description: string;
    image_dark: string;
    categories: ICategory[];
}
