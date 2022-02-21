import { CenterfinTheme } from "./schemes/CenterfinTheme";


const themeMap = {
  CenterfinTheme
};

export function themeCreator(theme) {
  return themeMap[theme];
}
