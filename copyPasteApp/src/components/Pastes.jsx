import React from "react";
import { useState } from "react";
import "./Pastes.css";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  addToPaste,
  updateToPaste,
  removeFromPastes,
  resetAllPastes,
} from "../features/copyPasteSlice";
import { NavLink } from "react-router";
const Pastes = () => {
  const [text, setText] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const filterData = pastes.filter((paste) =>
    paste.title
      .replace(/\s+/g, "")
      .toLowerCase()
      .includes(text.replace(/\s+/g, "").toLowerCase())
  );
  function handelDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  function handleClear() {
    dispatch(resetAllPastes());
  }
  return (
    <div className="pastes-div">
      <div id="input-tag-btn">
        <input
          type="text"
          placeholder="Search your title here"
          id="input-pastes"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button id="btn-pastes" onClick={handleClear}>
          Clear all Pastes
        </button>
      </div>

      <div className="card">
        {filterData.length > 0 ? (
          filterData.map((paste) => {
            return (
              <div className="each-card" key={paste?._id}>
                {paste.title}
                <div>{paste.createdAt}</div>
                <div className="modify-btns">
                  <button className="m-btn">
                    <NavLink to={`/?pasteId=${paste?._id}`} id="navlink">
                      Edit
                    </NavLink>
                  </button>
                  <button className="m-btn">
                    <NavLink to={`/pastes/${paste?._id}`} id="navlink">
                      View
                    </NavLink>
                  </button>
                  <button
                    className="m-btn"
                    onClick={() => handelDelete(paste?._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="m-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to Clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button
                    className="m-btn"
                    onClick={() => {
                      const shareURL = `${window.location.origin}/pastes/${paste._id}`;
                      navigator.clipboard.writeText(shareURL);
                      toast.success("Link copied to clipboard!");
                    }}
                  >
                    Share
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Results Not Found</p>
        )
      }
      </div>
    </div>
  );
};

export default Pastes;
