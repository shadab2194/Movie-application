import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("Popular");
  return (
    <div className="flex justify-between items-center bg-gray-600 text-white">
      <div className="text-xl font-bold mx-auto  ">MovieDb</div>
      <div className="flex justify-between mt-2 mb-1">
        <ul className="flex ">
          <li
            className="mr-4"
            onClick={() => {
              setMenu("Popular");
            }}
          >
            <Link to="/">Popular</Link>
            {menu === "Popular" ? <hr /> : <></>}
          </li>
          <li
            className="mr-4"
            onClick={() => {
              setMenu("Top rated");
            }}
          >
            <Link to="/toprated">Top rated</Link>
            {menu === "Top rated" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Upcoming");
            }}
          >
            <Link to="/upcoming">Upcoming</Link>
            {menu === "Upcoming" ? <hr /> : <></>}
          </li>
        </ul>
        <input
          type="text"
          placeholder="Movie name"
          className="rounded-md border-2 border-dotted mr-2 ml-2"
        />
        <button className="bg-gray-500 rounded-md mr-4 p-1">Search</button>
      </div>
    </div>
  );
};
export default Navbar;
