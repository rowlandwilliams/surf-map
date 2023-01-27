import type { FormEvent } from "react";
import { useState } from "react";
import { api } from "../../utils/api";
import { AddSurfSpotPopUpFormInput } from "./AddSurfSpotPopUpFormInput/AddSurfSpotPopUpFormInput";
const yPadding = 20;

interface Props {
  addSpotCoords: { x: number; y: number; latitude: number; longitude: number };
  closeAddSurfSpotPopUp: () => void;
}

export const AddSurfSpotPopUp = ({
  addSpotCoords,
  closeAddSurfSpotPopUp,
}: Props) => {
  const { x, y, latitude, longitude } = addSpotCoords;
  const [spotName, setSpotName] = useState("");
  const [spotCountry, setSpotCountry] = useState("");

  const utils = api.useContext();
  const saveSurfSpot = api.example.addSurfSpot.useMutation({
    onMutate: async (newEntry) => {
      await utils.example.getAll.cancel();
      utils.example.getAll.setData(undefined, (prevEntries) => {
        if (prevEntries) {
          return [newEntry, ...prevEntries];
        } else {
          return [newEntry];
        }
      });
    },
    onSettled: async () => {
      await utils.example.getAll.invalidate();
    },
  });

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveSurfSpot.mutate({
      name: spotName,
      country: spotCountry,
      latitude,
      longitude,
    });
    closeAddSurfSpotPopUp();
  };

  return (
    <section
      className="absolute -translate-y-full -translate-x-1/2 space-y-4 rounded-md bg-white p-8 text-gray-800 transition-all duration-300"
      style={{ top: y - yPadding, left: x }}
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
