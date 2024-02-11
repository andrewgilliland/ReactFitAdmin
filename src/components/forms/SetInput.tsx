import Input from "../Input";

const SetInput = () => {
  return (
    <>
      <div className="text-sm text-gray-500">Set 1</div>
      <div className="border-2 border-pink-400 rounded mt-1 p-4">
        <fieldset className="border-2 border-pink-400 rounded px-4 py-1">
          <legend className="text-sm text-gray-500">Set Type</legend>
          <label className="text-sm text-grey-500">
            Repetitions
            <input
              className="ml-1"
              type="radio"
              name="set-1"
              value="repetitions"
              checked
            />
          </label>
          <label className="text-sm text-grey-500 ml-4">
            Duration
            <input
              className="ml-1"
              type="radio"
              name="set-1"
              value="duration"
            />
          </label>
        </fieldset>
        <Input value={10} name="repetitions" type="number" className="mt-1" />
      </div>
    </>
  );
};

export default SetInput;
