import type {Category} from "../category/CategoryType.ts";

export type Task = {
  id?: number | string | null;
  title: string;
  description: string;
  category: Category;
};
