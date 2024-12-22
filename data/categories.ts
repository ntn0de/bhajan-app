import { categories } from "./dataJSON.json";

function getCategories() {
  return categories;
}

const getCategory = (id: number) => {
  // get all the categories that have the mainCategoryId as the id
  const subCategories = categories.filter(
    (category) => category.mainCategoryId === id
  );
  return subCategories;
};

export { getCategories, getCategory };
