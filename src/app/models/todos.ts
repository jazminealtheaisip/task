import { Category } from "./categories";

export interface Todo{
    id: string;
    taskName: string;
    taskStatus: Category;
    dateAdded: Date;
}