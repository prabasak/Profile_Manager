import React, { useContext } from "react";
import styles from "./ProfileBox.module.css";
import { ProfileContext } from "../../../store/profile.context";
import Modal from "../../Modal/Modal";
import DeleteConfirmation from "../../Modal/DeleteConfirmation";

function ProfileBox() {
  const {
    users,
    isDataFetching,
    modalOpen,
    deleteModal,
    editModal,
  } = useContext(ProfileContext);

  return (
    <>
      {deleteModal && (
        <Modal>
          <DeleteConfirmation />
        </Modal>
      )}
      {editModal && (
        <Modal>
          <EditProfile />
        </Modal>
      )}
      {isDataFetching && <p>Please wait, data is being fetched</p>}
      {users.length ? (
        users.map((user, index) => (
          <div key={user.id} className={styles["project-box-wrapper"]}>
            <div
              className={styles["project-box"]}
              style={{ backgroundColor: "#fee4cb" }}
            >
              <div className={styles["project-box-header"]}>
                <span>{user.username}</span>
                <div className={styles["more-wrapper"]}>
                  <button
                    className={styles["project-btn-more"]}
                    onClick={() => modalOpen(user, index, "delete")}
                  >
                    &#x274c;
                  </button>
                </div>
              </div>
              <div className={styles["project-box-content-header"]}>
                <p className={styles["box-content-header"]}>{user.name}</p>
                <p className={styles["box-content-subheader"]}>{user.email}</p>
              </div>
              <div className={styles["project-box-footer"]}>
                <div className={styles["participants"]}>
                  <button
                    className={styles["nobg-btn"]}
                    onClick={() => modalOpen(user, index, "edit")}
                  >
                    Edit
                  </button>
                </div>
                <div
                  className={styles["days-left"]}
                  style={{ color: "#ff942e" }}
                >
                  {user.phone}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>List is empty</p>
      )}
    </>
  );
}

export default ProfileBox;
