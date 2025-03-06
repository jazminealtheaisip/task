import { Category } from "./categories";

export interface Todo{
    id: number;
    taskName: string;
    // taskStatus: Category;
    taskStatus: string;
    dateAdded: Date;
}


