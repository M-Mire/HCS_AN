"use client";
import { emojisCategories } from "./Emojis";
import { useEffect, useState } from "react";
import Text from "./components/Text";
import Navbar from "./components/Navbar";
import KeyBoard from "./components/Keyboard";
import StatsInterface from "./components/StatsInterface";
import { sendEmail } from "./api/send/sendEmail";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [emojiCat, setEmojiCat] = useState<string>(emojisCategories[0].name); // Clicked category

  const [attempt, setAttempt] = useState<number>(0);
  const [password, setPassword] = useState<string>("");
  const [isPasswordCorrect, setPasswordCorrect] = useState<boolean>(false);
  const [timeTaken, setTimeTaken] = useState<number>(0);
  const [errorRate, setErrorRate] = useState<number>(0);

  useEffect(() => {
    if (password) {
      if (attempt === 1 && text.length && !timeTaken) {
        setTimeTaken(Date.now());
      }
    }
  }, [text]);

  const handleCorrectAnswerEntered = async () => {
    const elapsedTime = (Date.now() - timeTaken) / 1000;
    setTimeTaken(elapsedTime);
    setErrorRate(((attempt - 1) / attempt) * 100);
    setPasswordCorrect(true);

    try {
      await sendEmail(password, elapsedTime, attempt, true);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleCategoryClick = (cat: string) => {
    setEmojiCat(cat);
  };

  const handleEmojiClick = (emoji: string) => {
    setText(text + emoji);
  };

  const handleCloseInterface = () => {
    setPassword("");
    setAttempt(0);
    setTimeTaken(0);
    setPasswordCorrect(false);
    setErrorRate(0);
  };

  return (
    <main className="flex flex-col h-screen">
      <Navbar switchHref="/all" switchName="Combined" />
      {isPasswordCorrect && (
        <StatsInterface
          timeTaken={timeTaken}
          errorRate={errorRate}
          handleClose={handleCloseInterface}
        />
      )}
      <div className="flex-grow flex items-center justify-center">
        <Text
          text={text}
          setText={setText}
          setPassword={setPassword}
          password={password}
          attempt={attempt}
          setAttempt={setAttempt}
          handleCorrectAnswerEntered={handleCorrectAnswerEntered}
        />
      </div>
      <KeyBoard
        handleEmojiClick={handleEmojiClick}
        handleCategoryClick={handleCategoryClick}
        emojiCat={emojiCat}
        emojisCategories={emojisCategories}
      />
    </main>
  );
}
