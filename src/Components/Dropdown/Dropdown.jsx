import React, { useState } from "react";
import Select from "react-select";

const options1 = [
  { value: "", label: "What sport would you like stats on?" },
  { value: "football", label: "Football" },
  { value: "formula 1", label: "Formula 1" }

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
  { value: "most ballon d'ors", label: "Most Ballon D'or Winners" },
  { value: "most match wins", label: "Most Match Wins" },
  { value: "most champions league winners", label: "Most Champions League Winners" },
];

// Custom Styles
const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#121028",
    borderColor: "#121028",
    color: "white",
    boxShadow: "none",
    height: "75px",
    "&:hover": { borderColor: "#121028" },
    zIndex: "10"
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
    zIndex: "10"
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#121028",
    zIndex: "10"
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "#121028" : isFocused ? "#121028" : "#121028",
    color: "white",
    padding: "15px",
    zIndex: "10"
  }),
  placeholder: (base) => ({
    ...base,
    color: "white",
    zIndex: "10"
  }),
};

function Dropdown({ setSelectedStat }) {
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedStat, setLocalSelectedStat] = useState(null);

  // Get second dropdown options based on selected sport
  const getOptionsForSecondDropdown = () => {
    if (selectedSport?.value === "formula 1") return optionsForF1;
    if (selectedSport?.value === "football") return optionsForFootball;
    return [];
  };

  // Handle first dropdown selection
  const handleSportChange = (newSelection) => {
    setSelectedSport(newSelection);
    setLocalSelectedStat(null); // Reset second dropdown
    setSelectedStat(null); // Reset global stat
  };

  // Handle second dropdown selection
  const handleStatChange = (newSelection) => {
    setLocalSelectedStat(newSelection);
    setSelectedStat(newSelection?.value); // Pass selected stat to App.jsx
  };

  return (
      <div>
        <h1
            style={{fontSize: '3rem', fontWeight: 'bold', textTransform: 'uppercase', paddingLeft:"40px"}}>
          Choose Your Sport Stats
        </h1>
        <div className="dropdown-container" style={{padding: "4rem 3rem"}}>
          <div style={{display: "flex", gap: "1rem", flexDirection: "column", maxWidth: "350px", color: "white"}}>
            {/* First Dropdown */}
            <Select
                options={options1}
                value={selectedSport}
                onChange={handleSportChange}
                styles={customStyles}
                isSearchable={false}
                placeholder="What sport would you like stats on?"
            />

            {/* Second Dropdown (conditionally rendered) */}
            {selectedSport?.value && (
                <Select
                    options={getOptionsForSecondDropdown()}
                    value={selectedStat}
                    onChange={handleStatChange}
                    styles={customStyles}
                    isSearchable={false}
                    placeholder={`Select ${selectedSport?.label} stats to learn about`}
                />
            )}
          </div>
        </div>
      </div>
  );
}

export default Dropdown;