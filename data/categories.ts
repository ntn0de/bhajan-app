import { categories } from "./dataJSON.json";

// featured could be empty
function getCategories({ featured }: { featured: boolean }) {
  if (featured) {
    return categories.filter((category) => category.featured);
  } else {
    return categories;
  }
}

const getCategory = (id: number) => {
  // get all the categories that have the mainCategoryId as the id
  const subCategories = categories.filter(
    (category) => category.mainCategoryId === id
  );
  console.log({ id, subCategories });
  return subCategories;
};

export { getCategories, getCategory };
