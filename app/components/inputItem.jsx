"use client";

import { Circle, Square } from "lucide-react";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function InputItem({ type }) {
  const [value, setValue] = useState(null);

  return (
    <div className=" p-3 rounded-lg  mt-3 flex items-center gap-4">
      {type === "source" ? (
        <Circle strokeWidth={3} stroke="yellow" />
      ) : (
        <Square strokeWidth={3} stroke="yellow" />
      )}
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value,
          onChange: setValue,
          placeholder: "Pickup Location",
          isClearable: true,
          className: "w-full text-white",
          components: {
            DropdownIndicator: false,
          },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "#00ffff00",
              color: "white",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? "#1f2937" : "#ffffff", // Highlight focused option
              color: state.isFocused ? "#ffffff" : "#000000", // Text color
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "black",
            }),
          },
        }}
      />
    </div>
  );
}

export default InputItem;
