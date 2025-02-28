import { Category } from "./categories";

export interface Todo{
    id: string;
    taskName: string;
    // taskStatus: Category;
    taskStatus: string;
    dateAdded: Date;
}