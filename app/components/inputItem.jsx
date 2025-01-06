"use client"

import { Circle, Square } from "lucide-react";
import { useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


function InputItem({ type }) {
    const [value, setValue] = useState(null);

  return (
    <div className="bg-neutral-950 p-3 rounded-lg mt-3 flex items-center gap-4">
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
            placeholder:"Pickup Location",
            isClearable:true,
            className:"w-full",
            components:{
               DropdownIndicator:false,

            },
            styles:{
                input:(provided)=>({
                    ...provided,
                    color:"black"
                })
            }
          }}
          />


      {/* <input
        type="text"
        placeholder={type==="source"?"Pickup Location":"DropOff Location"}
        className=" bg-transparent w-full outline-none"
      /> */}
    </div>
  );
}

export default InputItem;
