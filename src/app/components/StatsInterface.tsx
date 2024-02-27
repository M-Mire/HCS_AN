import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface StatsInterfaceProps {
  timeTaken: number;
  errorRate: number;
  handleClose: () => void;
}
const StatsInterface: React.FC<StatsInterfaceProps> = ({
  timeTaken,
  errorRate,
  handleClose,
}) => {
  return (
    <div className="fixed left-0 w-full h-full top-16 bg-black opacity-90 z-50">
      <div className="flex h-full flex-col items-center justify-start">
        <div className="flex w-full items-center justify-end pr-2">
          <IconButton onClick={handleClose} style={{ color: "red" }}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="flex w-full flex-wrap justify-center overflow-auto">
          <div className="m-2 flex h-32 w-full flex-col justify-between rounded-2xl border-2 hover:bg-opacity-25 sm:w-1/3 md:w-1/3 lg:w-1/4">
            <p className="m-2 flex justify-center text-white sm:text-sm md:text-sm  lg:text-xl">
              Time
            </p>
            <h1 className="my-2 flex justify-center text-4xl text-white sm:text-2xl lg:text-4xl">
              {timeTaken}
            </h1>
            <span className="text-sm text-center">seconds</span>
          </div>
          <div className="m-2 flex h-32 w-full flex-col justify-between rounded-2xl border-2 hover:bg-opacity-25 sm:w-1/3 md:w-1/3 lg:w-1/4">
            <p className="m-2 flex justify-center text-white sm:text-sm md:text-sm  lg:text-xl">
              Accuracy
            </p>
            <h1 className="my-2 flex justify-center text-4xl text-white sm:text-2xl lg:text-4xl">
              {100 - errorRate}%
            </h1>
          </div>
          <div className="m-2 flex h-32 w-full flex-col justify-between rounded-2xl border-2 hover:bg-opacity-25 sm:w-1/3 md:w-1/3 lg:w-1/4">
            <p className="m-2 flex justify-center text-white sm:text-sm md:text-sm  lg:text-xl">
              Error Rate
            </p>
            <h1 className="my-2 flex justify-center text-4xl text-white sm:text-2xl lg:text-4xl">
              {errorRate}%
            </h1>
            <span className="text-sm text-center">
              (wrong/total attempts)x100%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsInterface;
