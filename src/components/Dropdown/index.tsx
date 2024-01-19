import { cn } from "@/utils";
import { useState } from "react";
import Select, { Props as SelectProps } from "react-select";
import AsyncSelect from "react-select/async";

const dropdownStyles = cn(["w-48"]);

type OptionType = {
  value: string;
  label: string;
};

type StateManagedSelectProps = {
  options?: OptionType[];
  isSearchable?: boolean;
  isMulti?: boolean;
  loadOptionOnChange?: boolean;
} & SelectProps<OptionType>;

export const Dropdown = ({
  options,
  isSearchable = false,
  isMulti = false,
  loadOptionOnChange = false,
  ...props
}: StateManagedSelectProps) => {
  const [value, setValue] = useState<OptionType | OptionType[]>([]);

  const loadOptions = (searchValue: any, callBack: any) => {
    const filteredOptions = options?.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    callBack(filteredOptions);
  };

  return (
    <div>
      {loadOptionOnChange ? (
        <AsyncSelect
          className={dropdownStyles}
          value={value}
          placeholder="Select a country"
          loadOptions={loadOptions}
          onChange={(option) => setValue(option as OptionType)}
          {...props}
        />
      ) : (
        <Select
          className={dropdownStyles}
          options={options}
          value={value}
          placeholder="Select a country"
          onChange={(option) => setValue(option as OptionType[])}
          isSearchable={isSearchable}
          isMulti={isMulti}
          {...props}
        />
      )}
    </div>
  );
};
