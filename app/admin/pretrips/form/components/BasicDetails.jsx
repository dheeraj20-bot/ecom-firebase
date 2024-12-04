'use client';
import { useState, useEffect } from "react";
import { useStates } from "/lib/firestore/states/read";
import { useCategories } from "/lib/firestore/categories/read";

export default function BasicDetails({ data, handleData }) {
  const { data: states } = useStates();
  const { data: categories } = useCategories();
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    // Initialize itinerary from data prop or create a default day
    setItinerary(data?.itinerary || [{ day: 1, description: "" }]);
  }, [data?.itinerary]);

  const handleChange = (field, value) => {
    handleData(field, value);
  };

  
  const handleItineraryChange = (index, value) => {
    const updatedItinerary = itinerary.map((item, i) => 
      i === index ? { ...item, description: value } : item
    );
    setItinerary(updatedItinerary);
    handleData("itinerary", updatedItinerary);
  };

  const addDay = () => {
    const newDay = { day: itinerary.length + 1, description: "" };
    const updatedItinerary = [...itinerary, newDay];
    setItinerary(updatedItinerary);
    handleData("itinerary", updatedItinerary);
  };

  const removeDay = (index) => {
    const updatedItinerary = itinerary.filter((_, i) => i !== index)
      .map((item, i) => ({ ...item, day: i + 1 })); // Reorder days
    setItinerary(updatedItinerary);
    handleData("itinerary", updatedItinerary);
  };

  return (
    <section className="bg-white flex-1 flex flex-col gap-3 rounded-xl p-4 border">
      <h1 className="font-semibold">Basic Details</h1>

      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm" htmlFor="trip-name">
          Trip Name<span className="text-red-500"> *</span>
        </label>
        <input
          required
          type="text"
          value={data?.tripName || ""}
          onChange={(e) => handleChange("tripName", e.target.value)}
          placeholder="Enter Trip Name"
          id="trip-name"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>
      
      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm" htmlFor="destinations">
          Destination(s)<span className="text-red-500"> *</span>
        </label>
        <input
          required
          type="text"
          value={data?.destinations || ""}
          onChange={(e) => handleChange("destinations", e.target.value)}
          placeholder="Enter destinations"
          id="destinations"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm" htmlFor="product-brand">
          State<span className="text-red-500"> *</span>{" "}
        </label>
        <select
          required
          value={data?.brandId || ""}
          onChange={(e) => handleChange("brandId", e.target.value)}
          id="product-brand"
          name="product-brand"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        >
          <option value="">Select State</option>
          {states?.map((item) => (
            <option value={item?.id} key={item?.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm" htmlFor="product-category">
          Category<span className="text-red-500"> *</span>{" "}
        </label>
        <select
          required
          value={data?.categoryId || ""}
          onChange={(e) => handleChange("categoryId", e.target.value)}
          id="product-category"
          name="product-category"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        >
          <option value="">Select Category</option>
          {categories?.map((item) => (
            <option value={item?.id} key={item?.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm" htmlFor="duration">
          Duration (in days)<span className="text-red-500"> *</span>
        </label>
        <input
          required
          type="number"
          value={data?.duration || ""}
          onChange={(e) => handleChange("duration", e.target.valueAsNumber)}
          placeholder="Enter Duration"
          id="duration"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>

      {/* Day-Wise Itinerary */}
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold">Itinerary</h2>
        {itinerary.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-gray-600 text-sm">Day {item.day}</label>
              <textarea
                value={item.description}
                onChange={(e) => handleItineraryChange(index, e.target.value)}
                placeholder={`Enter details for Day ${item.day}`}
                className="border px-4 py-2 rounded-lg w-full outline-none"
              ></textarea>
            </div>
            {itinerary.length > 1 && (
              <button
                type="button"
                onClick={() => removeDay(index)}
                className="text-red-500 border px-2 py-1 rounded-lg hover:bg-red-100"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addDay}
          className="text-blue-500 border px-3 py-1 rounded-lg hover:bg-blue-100 self-start"
        >
          Add Day
        </button>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm" htmlFor="price">
          Price (per person)<span className="text-red-500"> *</span>
        </label>
        <input
          required
          type="number"
          value={data?.price || ""}
          onChange={(e) => handleChange("price", e.target.valueAsNumber)}
          placeholder="Enter Price"
          id="price"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div> 
    </section>
  );
}

