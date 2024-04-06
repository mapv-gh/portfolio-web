import { GitHub } from "@mui/icons-material";
import { Bio } from "../data/constants";

const GitButton = () => {
  return (
    <div>
      <a
        target="_Blank"
        href={Bio.github}
        className="bg-black dark:bg-white text-white dark:text-black border-black rounded-3xl border-2 cursor-pointer px-2 py-1 font-semibold text-xl transition-all ease-in-out  hover:bg-white hover:text-black hover:border-2 hover:border-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white"
      >
        <GitHub className="pb-1" />
        &nbsp;Github
      </a>
    </div>
  );
};

export default GitButton;
