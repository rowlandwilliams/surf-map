import classNames from "classnames";
import Image from "next/image";

interface Props {
  addMode: boolean;
  handleAddButtonClick: () => void;
}

export const MapController = ({ addMode, handleAddButtonClick }: Props) => {
  return (
    <section className="absolute top-4 left-4 rounded-md border bg-zinc-900 border-gray-600 p-4">
      <button
        className={classNames(
          "flex items-center gap-x-2 rounded-md p-4 font-medium",
          {
            "bg-indigo-600": !addMode,
            "bg-indigo-900": addMode,
          }
        )}
        onClick={handleAddButtonClick}
      >
        <Image src="add.svg" width={24} height={24} alt="add" /> Add Surf Spot
      </button>
    </section>
  );
};
