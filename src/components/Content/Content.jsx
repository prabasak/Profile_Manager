import React from "react";
import styles from "./Content.module.css";
import AppSidebar from "./AppSidebar/AppSidebar";
import ProfileSection from "./ProfileSection/ProfileSection";

function Content() {
  return (
    <section className={styles["app-content"]}>
      <AppSidebar />
      <ProfileSection />
    </section>
  );
}

export default Content;
