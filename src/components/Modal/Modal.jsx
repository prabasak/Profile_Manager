import React, { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ProfileContext } from "../../store/profile.context";

const Dialog = styled.dialog`
  width: 45rem;
  padding: 0;
  z-index: 2;
  border: 2px solid #444;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  animation: slide-down-fade-in 0.3s ease-out forwards;
  position: relative;

  &::backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
  }

  & .closeModal {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: transparent;
    border: 0;
  }
`;

function Modal({ children }) {
  const { modalIsOpen, modalClose } = useContext(ProfileContext);
  console.log(modalIsOpen)
  const dialog = useRef();
  useEffect(() => {
    if (modalIsOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [modalIsOpen]);
  return createPortal(
    <Dialog ref={dialog}>
      {children}
      <button className="closeModal" onClick={modalClose}>
        &#x274c;
      </button>
    </Dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
