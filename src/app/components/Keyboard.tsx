import { Grid } from "@mui/material";
import { EmojiCategory } from "../types";

interface KeyBoardProps {
  handleEmojiClick: (emoji: string) => void;
  handleCategoryClick: (cat: string) => void;
  emojiCat?: string;
  emojisCategories: EmojiCategory[];
}

const KeyBoard: React.FC<KeyBoardProps> = ({
  handleEmojiClick,
  handleCategoryClick,
  emojiCat,
  emojisCategories,
}) => {
  return (
    <div className="flex h-80 mb-8 mx-12  rounded-2xl border-2 border-indigo-600">
      {/* Categories  */}
      {emojisCategories?.length > 1 && (
        <div className="w-24 p-2 flex flex-col justify-between border-r-2 border-indigo-600">
          {emojisCategories?.map((emojiCategory) => {
            return (
              <div
                key={`emojiCategory-${emojiCategory.name}`}
                onClick={() => handleCategoryClick(emojiCategory.name)}
                className={`text-center p-4 flex justify-center items-center rounded-2xl hover:bg-slate-500 ${
                  emojiCat === emojiCategory.name ? "bg-slate-600" : ""
                }`}>
                <span>{emojiCategory.name}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Keyboard Items */}
      <div className="ml-2 w-full overflow-x-auto">
        <Grid container spacing={2} sx={{ "& .emoji": { fontSize: "2.8rem" } }}>
          {emojisCategories
            ?.find((category) => category.name === emojiCat)
            ?.emojis.map((emoji, index) => (
              <Grid key={index} item xs={4} sm={3} md={2} lg={1}>
                <span className="emoji" onClick={() => handleEmojiClick(emoji)}>
                  {emoji}
                </span>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};
export default KeyBoard;
