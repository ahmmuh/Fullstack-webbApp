import React from "react";

function Input({
  type,
  id,
  name,
  placeholder,
  labelText,
  handlerChange,
  value,
}) {
  return (
    <div className="mb-3 w-full">
      {labelText && (
        <label htmlFor={id} className="block mb-1 font-medium ">
          {labelText}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handlerChange}
        className="p-1 border rounded w-full hover:bg-amber-50 focus:bg-amber-200"
      />
    </div>
  );
}

export default Input;
