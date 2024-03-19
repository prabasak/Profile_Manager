import React from "react";
import styles from "./ProfileSection.module.css";
import ProfileBox from "../ProfileBox/ProfileBox";

function ProfileSection() {
  return (
    <div className={styles["projects-section"]}>
      <div className={styles["projects-section-header"]}>
        <p>Profiles</p>
        <p className={styles["time"]}>
          {new Date().toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
      <div className={styles["projects-section-line"]}>
        <div className={styles["view-actions"]}>
          <button
            className={`${styles["view-btn"]} ${styles["list-view"]}`}
            title="List View"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button
            className={`${styles["view-btn"]} ${styles["grid-view"]} ${styles["active"]}`}
            title="Grid View"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${styles["project-boxes"]} ${styles["jsGridView"]}`}>
        <ProfileBox />
      </div>
    </div>
  );
}

export default ProfileSection;
