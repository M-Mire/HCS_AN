import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
interface TextProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setAttempt: React.Dispatch<React.SetStateAction<number>>;
  attempt: number;
  handleCorrectAnswerEntered: () => void;
}
const Text: React.FC<TextProps> = ({
  text,
  setText,
  password,
  setPassword,
  setAttempt,
  attempt,
  handleCorrectAnswerEntered,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // If no password has been entered and if text is a valid string set the password.
    if (!password && text) {
      console.log("current password: ", text);
      setPassword(text);

      // if password has been entered check if the text submitted is the same as the password
    } else if (password && text) {
      if (password === text) {
        handleCorrectAnswerEntered();
      }
    }
    setAttempt((prev) => {
      return prev + 1;
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full mx-20">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="h-16 w-full text-yellow-500 px-4 rounded-2xl border-2 border-indigo-600 bg-inherit text-center pr-14"
        placeholder="Use the Keyboard to type"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 bg-indigo-600 text-white rounded-md mx-4 my-4 px-1">
        <ArrowUpwardIcon />
      </button>
    </form>
  );
};

export default Text;
