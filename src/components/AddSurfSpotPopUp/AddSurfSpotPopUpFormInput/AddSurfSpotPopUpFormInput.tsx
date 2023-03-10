import type { Dispatch, SetStateAction } from "react";

interface Props {
  inputTitle: string;
  inputState: string;
  inputStateSetter: Dispatch<SetStateAction<string>>;
}

export const AddSurfSpotPopUpFormInput = ({
  inputTitle,
  inputState,
  inputStateSetter,
}: Props) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="default-input"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {inputTitle}
      </label>
      <input
        type="text"
        id="default-input"
        value={inputState}
        required
        onChange={(e) => inputStateSetter(e.target.value)}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
    </div>
  );
};
