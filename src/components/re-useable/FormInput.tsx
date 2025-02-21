import React from "react";

interface FormInputProps {
  label?: string;
  name: string;
  type?: string;
  register?: (name: string, options?: any) => any;
  disabled?: boolean;
  className?: string
  value?: string
  placeholder?: string
  required?: boolean
  options?: { label: string; value: string }[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, type = "text", register, disabled, required, className,value,placeholder,options = [],  onChange,}) => {
  return (
    <div className={`flex flex-col p-2 ${className}`} >
      {label && <label className="text-lg font-medium text-gray-600">{label}</label>}
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="border p-3 rounded-md text-lg focus:outline-none active:outline-none  focus:ring-0"
        >
          <option value="" disabled>
            {placeholder || "Select an option"}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
      <input
        type={type}
        {...(register ? register(name) : {})} 
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={`mt-1 p-3 text-lg font-normal border rounded-md  focus:outline-none active:outline-none bg-gray-100  focus:ring-0 focus:ring-blue-300 ${className} ${name === 'dateRequested' ? "bg-transparent ring-0 border-none " : ""} `}
      />
    )}
    </div>
  );
};

export default FormInput;