import React, { memo } from "react";
import clsx from "clsx";

const Select = ({
  label,
  options = [],
  register,
  errors,
  id,
  validate,
  style,
  fullWidth,
  defaultValue,
}) => (
  <div className="flex flex-col gap-2">
    {label && <label htmlFor={id}>{label}</label>}
    <select
      defaultValue={defaultValue}
      className={clsx("form-select max-h-[42px]", fullWidth && "w-full", style)}
      id={id}
      {...register(id, validate)}
    >
      <option value="">---CHOOSE---</option>
      {options?.map((el) => (
        <option
          key={el.code}
          value={typeof el.code === "string" ? el.code.toLowerCase() : el.code}
        >
          {el.value}
        </option>
      ))}
    </select>
    {errors[id] && (
      <small className="text-xs text-red-500">{errors[id]?.message}</small>
    )}
  </div>
);

export default memo(Select);
