import { bhajans } from "./dataJSON.json";

function getBhajans(id: number) {
  return bhajans.filter((bhajan) => bhajan.categoryId === id);
}
function getBhajan(id: number) {
  return bhajans.find((bhajan) => bhajan.id === id);
}

export { getBhajans, getBhajan };
