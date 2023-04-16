import React, { type ChangeEvent } from "react";

interface TextInputProps {
  label: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface PasswordInputProps {
  label: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="password"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface TextAreaInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  id,
  label,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface CheckboxInputProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  id,
  checked,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={onChange}
        className="focus:shadow-outline-blue mr-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
      <label htmlFor={id} className="inline font-bold text-gray-700">
        {label}
      </label>
    </div>
  );
};

interface RadioInputProps {
  label: string;
  id: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  id,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <input
        type="radio"
        id={id}
        name={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className="focus:shadow-outline-blue mr-2 appearance-none leading-tight focus:border-blue-500 focus:outline-none"
      />
      <label htmlFor={id} className="inline font-bold text-gray-700">
        {label}
      </label>
    </div>
  );
};

interface DateInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="date"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface DateTimeInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DateTimeInput: React.FC<DateTimeInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="datetime"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface DateTimeLocalInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DateTimeLocalInput: React.FC<DateTimeLocalInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="datetime-local"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface SelectInputProps {
  label: string;
  id: string;
  value: string;
  // options: Array<{ value: string; label: string }>;
  children: React.ReactNode;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  id,
  value,
  children,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      >
        {children}
      </select>
    </div>
  );
};

interface ColorInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ColorInput: React.FC<ColorInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="color"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface EmailInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const EmailInput: React.FC<EmailInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="email"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface RangeInputProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RangeInput: React.FC<RangeInputProps> = ({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          type="range"
          id={id}
          name={id}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          className="h-4 w-full appearance-none rounded-full bg-gray-300 outline-none"
        />
        <div className="absolute right-0 top-0 -mt-2">
          <span className="text-xs font-semibold text-gray-600">{value}</span>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

interface SearchInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="search"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface TelInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TelInput: React.FC<TelInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="tel"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface TimeInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TimeInput: React.FC<TimeInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="time"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface UrlInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const UrlInput: React.FC<UrlInputProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="url"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface NumberInputProps {
  label: string;
  id: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  id,
  value,
  min,
  max,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block font-bold text-gray-700">
        {label}
      </label>
      <input
        type="number"
        id={id}
        name={id}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="focus:shadow-outline-blue w-full appearance-none rounded-md border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};
