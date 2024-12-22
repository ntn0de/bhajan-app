import { bhajans } from "./dataJSON.json";

function getBhajans(id: number) {
  return bhajans.filter((bhajan) => bhajan.categoryId === id);
}

export { getBhajans };
