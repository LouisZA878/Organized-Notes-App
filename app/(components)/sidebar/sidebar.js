"use client";

import { useState } from "react";

import { FaAngleDoubleDown } from "react-icons/fa";

const Sidebar = () => {
  const [projectsToggle, setProjectsToggle] = useState(false);

  return (
    <>
      <div className="none"></div>
      <ul className="aside">
        <li
          className={`${projectsToggle ? "open" : "closed"}`}
          style={{ "--i": 3 }}
        >
          <span onClick={() => setProjectsToggle((prev) => !prev)}>
            Projects <FaAngleDoubleDown />
          </span>
          <ul className={`dropdown ${projectsToggle ? "open" : "closed"}`}>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
