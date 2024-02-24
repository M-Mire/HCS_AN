"use client";
import Link from "next/link";
import { Grid } from "@mui/material";
import { emojis } from "./Emojis";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("");

  const handleEmojiClick = (emoji: string) => {
    setText(text + emoji);
  };

  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <Text text={text} setText={setText} />
      </div>
      <KeyBoard handleEmojiClick={handleEmojiClick} />
    </main>
  );
}

interface TextProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const Text: React.FC<TextProps> = ({ text, setText }) => {
  const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    setText(event.target.innerText);
  };

  return (
    <div
      className="h-16 w-full mx-12 text-yellow-500 flex justify-center items-center rounded-2xl border-2 border-indigo-600"
      contentEditable={false}
      onInput={handleChange}>
      {text ? (
        <div>{text}</div>
      ) : (
        <div className="text-gray-400">Use the Keyboard to type</div>
      )}
    </div>
  );
};

interface KeyBoardProps {
  handleEmojiClick: (emoji: string) => void;
}

const KeyBoard: React.FC<KeyBoardProps> = ({ handleEmojiClick }) => {
  return (
    <div className="bg-inherit h-80 mb-8 mx-12 overflow-x-auto">
      <Grid container spacing={1} sx={{ "& .emoji": { fontSize: "2.5rem" } }}>
        {emojis.map((emoji, index) => (
          <Grid key={index} item xs={3} sm={2} md={1}>
            <span
              className="emoji"
              onClick={() => handleEmojiClick(emoji.emoji)}>
              {emoji.emoji}
            </span>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="flex h-16 items-center justify-between border-b-2 border-indigo-600 px-4 py-4">
      <div className="flex items-center">
        <div className="text-sm font-bold ">
          <Link href="/">😀</Link>
        </div>
        <div className="ml-2 flex items-center text-sm font-bold ">EzEmoji</div>
      </div>
    </nav>
  );
};
