import type { FormEvent } from "react";
import { useState } from "react";
import { AddSurfSpotPopUpFormInput } from "./AddSurfSpotPopUpFormInput/AddSurfSpotPopUpFormInput";
const yPadding = 20;

interface Props {
  addSpotCoords: { x: number; y: number };
  closeAddSurfSpotPopUp: () => void;
}

export const AddSurfSpotPopUp = ({
  addSpotCoords,
  closeAddSurfSpotPopUp,
}: Props) => {
  const [spotName, setSpotName] = useState("");
  const [spotCountry, setSpotCountry] = useState("");

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeAddSurfSpotPopUp();
  };

  return (
    <section
      className="absolute -translate-y-full -translate-x-1/2 space-y-4 rounded-md bg-white p-8 text-gray-800 transition-all duration-300"
      style={{ top: addSpotCoords.y - yPadding, left: addSpotCoords.x }}
    >
      <h1 className="font-medium ">Add Surf Spot</h1>
      <form onSubmit={(e) => handleSave(e)}>
        <AddSurfSpotPopUpFormInput
          inputTitle="Spot Name"
          inputState={spotName}
          inputStateSetter={setSpotName}
        />
        <AddSurfSpotPopUpFormInput
          inputTitle="Spot Country"
          inputState={spotCountry}
          inputStateSetter={setSpotCountry}
        />
        <div className="flex gap-x-2">
          <button
            type="submit"
            className="w-1/2 rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-opacity-80"
          >
            Save
          </button>
          <button
            type="button"
            className="w-1/2 flex-grow rounded-md bg-orange-300 px-4 py-2 text-center font-medium text-white hover:bg-opacity-80"
            onClick={closeAddSurfSpotPopUp}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};
