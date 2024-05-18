import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TuneIcon from "@mui/icons-material/Tune";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "../../styles/Filters.css";

const Filters = ({ onCategoryChange, onLanguageChange, onPriceChange, onSkillChange }) => {
  return (
    <div className="filters-container">
      <Card className="content-filters">
        <CardContent className="card-content">
          <TuneIcon className="icon-filters" />
          <Select className="select" defaultValue="All Categories" onChange={onCategoryChange}>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="Art">Art</MenuItem>
            <MenuItem value="Art">Marketing</MenuItem>
            <MenuItem value="UX Design">UX Design</MenuItem>            
            <MenuItem value="All Categories">All Categories</MenuItem>
          </Select>
          <Select className="select" defaultValue="All Languages" onChange={onLanguageChange}>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
            <MenuItem value="Italian">Italian</MenuItem>
            <MenuItem value="German">German</MenuItem>
            <MenuItem value="All Languages">All Languages</MenuItem>
          </Select>
          <Select className="select" defaultValue="All Prices" onChange={onPriceChange}>
            <MenuItem value="Free courses">Free courses</MenuItem>
            <MenuItem value="Paid courses">Paid courses</MenuItem>
            <MenuItem value="Subscribers only">Subscribers only</MenuItem>
            <MenuItem value="All Prices">All Prices</MenuItem>
          </Select>
          <Select className="select" defaultValue="All Skills" onChange={onSkillChange}>
            <MenuItem value="Begginer">Begginer</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
            <MenuItem value="All Skills">All Skills</MenuItem>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
};

export default Filters;
