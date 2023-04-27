import React, { useEffect, useState } from "react";
import "./filter-row.css";
import * as io from "react-icons/io5";
import sortBy from "../../images/sortby.png";
import filter from "../../images/filter.png";
import search from "../../images/search.png";
import SortMenu from "../Menus/SortMenu/SortMenu";
import FilterMenu from "../Menus/FilterMenu/FilterMenu";

const FilterRow = ({
  setProjects,
  searchProjects,
  getProjects,
  filterProjects,
}) => {
  const [sortMenu, setSortMenu] = useState(false);
  const [filterMenu, setFilterMenu] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const [leftMenu, setLeftMenu] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [workType, setWorkType] = useState("");
  const [liscense, setLiscense] = useState("");
  const handleLeftMenu = () => {
    if (window.innerWidth < 768) {
      setLeftMenu(true);
    }
  };


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchProjects(keyword);
    }
  };

  useEffect(() => {
    if (keyword === "") {
      getProjects();
    }
  }, [keyword]);

  useEffect(()=>{
    filterProjects(workType, liscense);
  },[workType,liscense]);

  return (
    <div className="container mx-auto mt-5">
      <div className="filter-row">
        <div className="f-left" style={leftMenu ? { display: "none" } : {}}>
          <div className="item">
            {sortMenu && (
              <SortMenu setProjects={setProjects} setSortMenu={setSortMenu} />
            )}
            <img
              onClick={() => {
                setSortMenu(!sortMenu);
              }}
              src={sortBy}
              alt=""
            />
            <span
              onClick={() => {
                setSortMenu(!sortMenu);
              }}
            >
              Newest
            </span>
          </div>
          <div className="item">
            {filterMenu && (
              <FilterMenu
                workType={workType}
                setWorkType={setWorkType}
                liscense={liscense}
                setLiscense={setLiscense}
                filterProjects={filterProjects}
                setFilterMenu={setFilterMenu}
              />
            )}

            <img
              onClick={() => {
                setFilterMenu(!filterMenu);
              }}
              src={filter}
              alt=""
            />
            <span
              onClick={() => {
                setFilterMenu(!filterMenu);
              }}
              style={workType !== "" ? {color: 'rgba(156, 26, 195, 0.88)'} : liscense !== "" ? {color: 'rgba(156, 26, 195, 0.88)'} : {}}
            >
              Filter
            </span>
          </div>
        </div>
        <div className="f-right" style={leftMenu ? { width: "100%" } : {}}>
          <div className="item">
            <img
              onClick={() => {
                setSearchInput(!searchInput);
                handleLeftMenu();
              }}
              src={search}
              alt=""
            />
            {searchInput && (
              <input
                type="text"
                onKeyDown={handleKeyDown}
                onChange={(event) => setKeyword(event.target.value)}
                placeholder="Search.."
                className={
                  searchInput
                    ? "search-input search-input-active"
                    : "search-input"
                }
              />
            )}
            {!searchInput && (
              <span
                onClick={() => {
                  setSearchInput(!searchInput);
                }}
              >
                Search
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Reset Filters  */}
      <div className="reset-filter">
        {
          workType !== "" ? <h3 className="mb-0">Reset Filters:</h3> : liscense !== "" ? <h3 className="mb-0">Reset Filters:</h3> : null
        }
        
        <div className="resets">
          {workType !== "" && (
            <div className="reset">
              <span style={{ textTransform: "capitalize" }}>{workType}</span>
              <span onClick={()=> setWorkType("")}>
                <io.IoCloseSharp />
              </span>
            </div>
          )}
          {liscense !== "" && (
            <div className="reset">
              <span style={{ textTransform: "capitalize" }}>{liscense}</span>
              <span onClick={()=> setLiscense("")}>
                <io.IoCloseSharp />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterRow;
