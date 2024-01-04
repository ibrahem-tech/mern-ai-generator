import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2 ">
      <label
        htmlFor={name}
        className="block text-sm font-medium  text-[#FAF9F6]"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-purple-200  py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}

      {/* bg-[#242d39] */}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-[#242d39] border border-[#10253c] text-[#FAF9F6] text-sm rounded-lg focus:ring-[#242d39] focus:border-[#242d39] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
