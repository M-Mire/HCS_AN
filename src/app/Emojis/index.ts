import { EmojiCategory } from "../types";
import { animalEmojis } from "./animalEmojis";
import { objectEmojis } from "./objectEmojis";
import { symbolsEmojis } from "./symbolEmojis";

export const emojisCategories: EmojiCategory[] = [
  {
    name: "Animals",
    emojis: animalEmojis,
  },
  {
    name: "Symbols",
    emojis: symbolsEmojis,
  },
  {
    name: "Objects",
    emojis: objectEmojis,
  },
];

export const emojisAll: EmojiCategory[] = [
  {
    name: "All",
    emojis: animalEmojis.concat(symbolsEmojis, objectEmojis),
  },
];
