import React, { useContext } from "react";
import styled from "styled-components";
import { ProfileContext } from "../../store/profile.context";

const ConfirmationSection = styled.div`
  background: #f9f9f9;
  padding: 30px;
  font-size: 13px;
  color: #1f1c2e;

  & h2 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    color: #444;
  }

  & p {
    font-size: 1.15rem;
    color: #888;
  }

  & #confirmation-actions {
    margin-top: 1rem;
    text-align: right;

    & button {
      cursor: pointer;
      display: inline-block;
      border: 2px solid transparent;
      background: #4caf50;
      color: #fff;
      margin: 0 0 0 10px;
      padding: 10px 30px;
      font-size: 15px;
      border-radius: 10px;
    }
  }
`;

function DeleteConfirmation() {
  const { modalClose, deleteProfile } = useContext(ProfileContext);
  return (
    <ConfirmationSection>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this task?</p>
      <div id="confirmation-actions">
        <button onClick={modalClose} className="button-text">
          No
        </button>
        <button onClick={deleteProfile} className="button">
          Yes
        </button>
      </div>
    </ConfirmationSection>
  );
}

export default DeleteConfirmation;
