import { Category } from "./categories";

export interface Todo{
    id: string;
    task: string;
    category: Category;
    date: Date;
    isEditing: boolean;
}