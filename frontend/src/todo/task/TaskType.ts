export type Task = {
  id?: number | string | null;
  title: string;
  description: string;
  category: Category;
};

export type Category = {
  id?: number | string | undefined;
  label: string;
}
