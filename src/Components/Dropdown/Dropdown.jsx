import { React, useState } from "react";
import Select from "react-select";

const options1 = [
  { value: "", label: "What sport would you like stats on?"},
  { value: "formula 1", label: "Formula 1" },
  { value: "football", label: "Football" },
];

const optionsForF1 = [
  { value: "most championships", label: "Most Championships" },
  { value: "most pole positions", label: "Most Pole Positions" },
  { value: "most race wins", label: "Most Race Wins" },
  { value: "most podiums", label: "Most Podiums" },
  { value: "most fastest laps", label: "Most Fastest Lap" },
  { value: "fastest lap at a given circuit", label: "Fastest Lap at a given circuit" },

];

const optionsForFootball = [
  { value: "most goals", label: "Most Goals" },
  { value: "most assists", label: "Most Assists" },
  { value: "most ballon d'ors", label: "Most Ballon D'ors Winners" },
  { value: "most wins", label: "Most Wins" },
];

const customStyles1 = {
  control: (base) => ({
    ...base,
    backgroundColor: "#121028", // Dark background
    borderColor: "#121028",
    color: "white", // Ensure text color is white
    boxShadow: "none",

    height: "75px",
    "&:hover": { borderColor: "#121028" },
  }),
  singleValue: (base) => ({
    ...base,
    color: "white", // Ensures selected text is white
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#121028", // Light yellow menu


  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "#121028" : isFocused ? "#121028" : "#121028",
    color: "white", // Ensures dropdown text is white
    padding: "15px"
  }),
  placeholder: (base) => ({
    ...base,
    color: "white", // Change placeholder text color
  }),
};

const customStyles2 = {
  control: (base) => ({
    ...base,
    backgroundColor: "#121028", // Dark background
    borderColor: "#121028",
    color: "white", // Ensure text color is white
    boxShadow: "none",
    height: "75px",
    lineHeight:"25px",
    "&:hover": { borderColor: "#121028" },
  }),
  singleValue: (base) => ({
    ...base,
    color: "white", // Ensures selected text is white
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#121028", // Light blue menu
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "#121028" : isFocused ? "#121028" : "#121028",
    color: "white", // Ensures dropdown text is white
    padding: "15px"
  }),
  placeholder: (base) => ({
    ...base,
    color: "white", // Change placeholder text color
  }),
};


function Dropdown() {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const getOptionsForSecondDropdown = () => {
    if (selectedOption1?.value === "formula 1") {
      return optionsForF1;
    } else if (selectedOption1?.value === "football") {
      return optionsForFootball;
    }
    return [];
  };

  const handleFirstDropdownChange = (newSelection) => {
    setSelectedOption1(newSelection);
    setSelectedOption2(null); // Reset second dropdown when first option is changed
  };

  return (
    <div className="dropdown-container" style={{ padding: "4rem 3rem" }}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          maxWidth: "350px",
          color: "white",

        }}
      >
        {/* First Dropdown */}
        <Select
          options={options1}
          value={selectedOption1}
          onChange={handleFirstDropdownChange}
          styles={customStyles1}
          isSearchable={false}
          placeholder="What sport would you like stats on?"
        />

        {/* Second Dropdown (conditionally rendered) */}
        {selectedOption1?.value && (
          <Select
            options={getOptionsForSecondDropdown()}
            value={selectedOption2}
            onChange={setSelectedOption2}
            styles={customStyles2}
            isSearchable={false}
            placeholder={`Select ${selectedOption1 ? selectedOption1.label : ''} stats to learn about`}
          />
        )}
      </div>
    </div>
  );
}

export default Dropdown;
