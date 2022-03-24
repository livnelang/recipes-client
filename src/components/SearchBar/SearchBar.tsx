import "./SearchBar.css";
import SearchImg from "../../assets/images/search.svg";
import { ChangeEvent } from "react";

interface SearchBarProps {
  handleSearchText: (text: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.handleSearchText(event.target.value.toLowerCase());
  };

  return (
    <div className="SearchBar">
      <img src={SearchImg} alt="" />
      <input
        type="text"
        placeholder="Search..."
        className="mainText"
        onChange={handleTextChange}
      />
    </div>
  );
};

export default SearchBar;
