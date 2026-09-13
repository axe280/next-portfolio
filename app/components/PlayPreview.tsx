import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlinePauseCircleOutline } from "react-icons/md";

export default function PlayPreview() {
  return (
    <button
      type="button"
      className="fixed z-40 bottom-4 right-4 lg:right-auto lg:left-4 w-15 h-15 rounded-full bg-foreground text-background flex items-center justify-center text-3xl"
    >
      <IoPlayCircleOutline />
      <MdOutlinePauseCircleOutline className="hidden" />
    </button>
  );
}
