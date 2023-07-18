import { imageUrl } from "../constant/imageURL";

export const convertItemImage = (id) => {
  // const idLength = id.toString().length
  // const newID = id <=999 ? "0".repeat(idLength <10 ? 2 :) : id

  const newID = id < 10 ? "00" + id : id < 100 ? "0" + id : id;

  return imageUrl(newID);
};