import { useState } from "react";

const SliderForm = () => {
  const [visibleForm, setVisibleForm] = useState<"sweet" | "rad">("sweet");

  const isSweet = visibleForm === "sweet";

  return (
    <div className="relative flex bg-gray-900 h-96 w-full rounded border-2 border-pink-400">
      <div className="flex bg-cyan-400 w-full h-full">
        <div className="w-1/2 border-2 h-full p-8">
          <div>
            <div className="font-bold text-black text-4xl">Sweet</div>
          </div>
        </div>
        <div className="w-1/2 border-2 h-full p-8">
          <div className="font-bold text-black text-4xl">Rad</div>
        </div>
      </div>
      <div
        className={`absolute transition translate-x-${
          visibleForm === "sweet" ? "full" : "0"
        } bg-cyan-900 w-1/2 h-full`}
      >
        <div
          className={`transition translate-x-${
            isSweet ? "0" : "full"
          } opacity-${isSweet ? "100" : "0"}`}
        >
          <button
            onClick={() => {
              setVisibleForm((prev) => (prev === "sweet" ? "rad" : "sweet"));
            }}
            className="border-2 border-black text-black px-4 py-2 rounded bg-cyan-500"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderForm;
