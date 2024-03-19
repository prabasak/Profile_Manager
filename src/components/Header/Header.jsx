import { ProfileContext } from "../../store/profile.context";
import Modal from "../Modal/Modal";
import AddProfile from "../form/Add/AddProfile";
import styles from "./Header.module.css";

import React, { useContext } from "react";

function Header() {
  const { modalOpen, addModal } = useContext(ProfileContext);

  return (
    <>
      {addModal && (
        <Modal>
          <AddProfile />
        </Modal>
      )}
      <div className={styles["app-header"]}>
        <div className={styles["app-header-left"]}>
          <span className={styles["app-icon"]}></span>
          <p className={styles["app-name"]}>Profile Manager</p>
          <div className={styles["search-wrapper"]}>
            <input
              className={styles["search-input"]}
              type="text"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="feather feather-search"
              viewBox="0 0 24 24"
            >
              <defs></defs>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </div>
        </div>
        <div className={styles["app-header-right"]}>
          <button
            className={styles["add-btn"]}
            title="Add New Project"
            onClick={modalOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="btn-icon feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <button className={styles["profile-btn"]}>
            <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
            <span>Master.</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
